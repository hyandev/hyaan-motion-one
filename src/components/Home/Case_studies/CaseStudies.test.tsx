import { fireEvent, render, screen, within } from "@testing-library/react";
import CaseStudies from "./CaseStudies";
import slides from "./slides";
import type { EmblaViewportRefType } from "embla-carousel-react";

const mockScrollNext = vi.fn();
const mockScrollPrev = vi.fn();

// 2. تحديث الـ Mock لاستخدام هذه الدوال
vi.mock("embla-carousel-react", () => ({
  __esModule: true,
  default: () => [
    (_node: EmblaViewportRefType) => {}, // emblaRef
    {
      scrollNext: mockScrollNext,
      scrollPrev: mockScrollPrev,
      canScrollNext: () => true,
      canScrollPrev: () => true,
    },
  ],
}));

describe("CaseStudies", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    render(<CaseStudies />);
  });

  it("renders all slides with correct images and logos", () => {
    const allImages = screen.getAllByRole("img");
    expect(allImages).toHaveLength(slides.length * 2);

    const containers = screen.getAllByRole("article");

    slides.forEach((slide, index) => {
      const image = screen.getByAltText(slide.imageAlt);
      expect(image).toBeInTheDocument();

      const logo = within(containers[index]).getByAltText(slide.logoAlt);
      expect(logo).toBeInTheDocument();
    });
  });

  it("renders all slide headlines and descriptions", () => {
    slides.forEach((slide) => {
      const heading = screen.getByRole("heading", {
        level: 3,
        name: new RegExp(slide.headline, "i"),
      });
      expect(heading).toBeInTheDocument();

      const paragraph = screen.getByText(new RegExp(slide.description, "i"));
      expect(paragraph).toBeInTheDocument();
    });
  });

  it("renders all impact items for each slide", () => {
    slides.forEach((slide) => {
      slide.impact.forEach((item) => {
        const impactItem = screen.getByText(item);
        expect(impactItem).toBeInTheDocument();
      });
    });
  });

  it("calls scrollNext when the Next button is clicked", () => {
    const nextButton = screen.getByRole("button", { name: /next slide/i });

    // محاكاة النقر
    fireEvent.click(nextButton);

    expect(mockScrollNext).toHaveBeenCalledTimes(1);
  });

  it("calls scrollPrev when the Previous button is clicked", () => {
    const nextButton = screen.getByRole("button", { name: /next slide/i });
    const prevButton = screen.getByRole("button", { name: /previous slide/i });

    fireEvent.click(nextButton);
    fireEvent.click(prevButton);

    expect(mockScrollNext).toHaveBeenCalledTimes(1);
    expect(mockScrollPrev).toHaveBeenCalledTimes(1);
  });
});
