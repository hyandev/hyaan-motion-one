import { render, screen, waitFor } from "@testing-library/react";
import BlogCard from "../BlogCard";
import { blogPosts } from "../blogPosts";
import { MemoryRouter, Route, Routes } from "react-router";
import userEvent from "@testing-library/user-event";
import Post from "../Post";
import { describe, it, expect, beforeEach } from "vitest";

describe("BlogCard Component", () => {
  describe("BlogCard Unit Tests", () => {
    it("should render blog post with correct attributes", () => {
      const post = blogPosts[0];

      render(
        <MemoryRouter>
          <BlogCard post={post} />
        </MemoryRouter>,
      );

      const link = screen.getByRole("link", {
        name: new RegExp(`Read blog post: ${post.title}`, "i"),
      });
      expect(link).toHaveAttribute("href", `/blog/${post.id}`);

      const img = screen.getByRole("img", { name: post.imageAlt });
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("src");

      const title = screen.getByRole("heading", { level: 2 });
      expect(title).toHaveTextContent(post.title);
    });

    it("should render category badge", () => {
      const post = blogPosts[0];

      render(
        <MemoryRouter>
          <BlogCard post={post} />
        </MemoryRouter>,
      );

      const badge = screen.getByText(post.category);
      expect(badge).toBeInTheDocument();
    });

    it("should have proper accessibility attributes", () => {
      const post = blogPosts[0];

      render(
        <MemoryRouter>
          <BlogCard post={post} />
        </MemoryRouter>,
      );

      const link = screen.getByRole("link");
      expect(link).toHaveAttribute(
        "aria-label",
        `Read blog post: ${post.title}`,
      );
    });
  });

  describe("BlogCard Navigation Integration", () => {
    const user = userEvent.setup();

    beforeEach(() => {});

    it("should navigate to correct post when clicked", async () => {
      const post = blogPosts[0];

      render(
        <MemoryRouter initialEntries={["/blog"]}>
          <Routes>
            <Route
              path="/blog"
              element={
                <main>
                  {blogPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </main>
              }
            />
            <Route path="/blog/:postSlug" element={<Post />} />
          </Routes>
        </MemoryRouter>,
      );

      const escapeRegex = (str: string) =>
        str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const safeTitle = new RegExp(escapeRegex(post.title), "i");
      const link = screen.getByRole("link", { name: safeTitle });

      await user.click(link);

      await waitFor(() => {
        expect(
          screen.getByRole("button", { name: /go back/i }),
        ).toBeInTheDocument();
      });
    });

    it("should render all blog cards from list", () => {
      render(
        <MemoryRouter>
          <main>
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </main>
        </MemoryRouter>,
      );

      const images = screen.getAllByRole("img");
      expect(images).toHaveLength(blogPosts.length);

      // IMPROVEMENT: Verify all links present
      const links = screen.getAllByRole("link");
      expect(links).toHaveLength(blogPosts.length);
    });

    it("should handle missing or invalid post gracefully", () => {
      const invalidPost = {
        ...blogPosts[0],
        id: "",
        title: "",
      };

      render(
        <MemoryRouter>
          <BlogCard post={invalidPost} />
        </MemoryRouter>,
      );

      expect(screen.getByRole("img")).toBeInTheDocument();
    });
  });

  describe("BlogCard Image Attributes", () => {
    it("should render image with high fetch priority and correct alt text", () => {
      const post = blogPosts[0];

      render(
        <MemoryRouter>
          <BlogCard post={post} />
        </MemoryRouter>,
      );

      const img = screen.getByRole("img", { name: post.imageAlt });

      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("src", post.src);

      expect(img).toHaveAttribute("fetchpriority", "high");

      expect(img).toHaveClass("group-hover:scale-110");
    });
  });
});
