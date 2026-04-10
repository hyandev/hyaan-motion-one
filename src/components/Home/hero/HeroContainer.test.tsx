import { render, screen, within } from "@testing-library/react";
import HeroContainer from "./HeroContainer";
import { TITLE, PARAGRAPH } from "./HeroContainer";
import { MemoryRouter } from "react-router";

const titleWords = TITLE.split(" ");
const paragraphWords = PARAGRAPH.split(" ");

const validateAnimatedWords = (container: HTMLElement, words: string[]) => {
  words.forEach((word) => {
    const wordElement = within(container).getByText(word);
    expect(wordElement).toBeInTheDocument(); //
    expect(wordElement).toHaveAttribute("aria-hidden", "true");
  });
};

describe("Hero Container", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <HeroContainer />
      </MemoryRouter>,
    );
  });

  it("renders badge without crashing", () => {
    expect(screen.getByText(/New/)).toBeInTheDocument();
    expect(screen.getByText(/Automated Lead Generation/)).toBeInTheDocument();
  });

  it("renders title with all words individually hidden from screen readers", () => {
    const title = screen.getByRole("heading", {
      level: 1,
      name: /Intelligent Automation for Modern Businesses./,
    });
    expect(title).toBeInTheDocument();
    validateAnimatedWords(title, titleWords);
  });

  it("renders paragraph with all words individually hidden from screen readers", () => {
    const paragraph = screen.getByTestId("intro-paragraph");

    expect(paragraph).toBeInTheDocument();
    validateAnimatedWords(paragraph, paragraphWords);
  });

  it("should render primary CTA button with link and icon", () => {
    const primaryButton = screen.getByRole("link", { name: /Get in Touch/i });

    expect(primaryButton).toBeInTheDocument();
    const a = primaryButton.closest("a");

    expect(a).toHaveAttribute("href", "/contact");
    expect(within(primaryButton).getByTestId("svg")).toBeInTheDocument();
  });

  it("should render secondary button without icon", () => {
    const secondaryButton = screen.getByRole("link", {
      name: /View services/i,
    });

    expect(secondaryButton).toBeInTheDocument();

    expect(secondaryButton.closest("a")).toHaveAttribute(
      "href",
      "#our-service",
    );

    expect(
      within(secondaryButton).queryByTestId("svg"),
    ).not.toBeInTheDocument();
  });
});
