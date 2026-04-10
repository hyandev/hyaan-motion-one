import { render, screen, within } from "@testing-library/react";
import Navbar from "../navbar/Navbar";
import navLinks from "../navbar/navLinks";
import { MemoryRouter } from "react-router";

describe("Navbar", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
  });
  it("should render all nav links with correct href", () => {
    const list = screen.getByRole("list");
    navLinks.forEach((link) => {
      const linkEl = within(list).getByRole("link", {
        name: new RegExp(link.name, "i"),
      });

      expect(linkEl).toBeInTheDocument();
      expect(linkEl).toHaveAttribute("href", link.href);
    });
  });

  it("should CTA link have unique style", () => {
    const ctaData = navLinks.find((link) => link.variant === "cta");
    const ctaLink = screen.getByRole("link", { name: ctaData?.name });
    const span = within(ctaLink).getByText(ctaData!.name, {
      exact: false,
    });

    expect(span).toBeInTheDocument();
    expect(span).toHaveClass("will-change-transform");
  });

  it("should length of links to be equal navLinks.length + 1", () => {
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(navLinks.length + 1); // +1 for logo
  });

  it("should Nav container to be visible", () => {
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
    expect(nav).toBeVisible();

    ["opacity-0", "hidden", "invisible"].forEach((cls) => {
      expect(nav).not.toHaveClass(cls);
    });
  });

  it("should Logo to be in the document and have href (/)", () => {
    const logo = screen.getByRole("link", { name: "Acme Corp home" });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("href", "/");
  });
});
