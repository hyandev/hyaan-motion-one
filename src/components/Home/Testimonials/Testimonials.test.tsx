import { render, screen, within } from "@testing-library/react";
import Testimonials from "./Testimonials";
import { testimonials } from "./testimonialsData";

describe("Testimonials component", () => {
  beforeEach(() => {
    render(<Testimonials />);
  });

  it("renders the correct number of testimonial cards", () => {
    const cards = screen.getAllByRole("article");
    expect(cards).toHaveLength(testimonials.length);
  });

  it("renders correct content for each testimonial", () => {
    testimonials.forEach((testimonial) => {
      // Anchor to unique quote text, then traverse up to the card
      const quote = screen.getByText(testimonial.quote);
      const card = quote.closest("article")!;

      // Stars
      const stars = within(card).getAllByTestId("lucide-star");
      expect(stars).toHaveLength(testimonial.stars);

      // Quote
      expect(quote).toBeInTheDocument();

      // Image
      const image = within(card).getByAltText(`${testimonial.name}'s profile`);
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("loading", "lazy");

      // Name
      expect(within(card).getByText(testimonial.name)).toBeInTheDocument();

      // Role
      expect(within(card).getByText(testimonial.role)).toBeInTheDocument();
    });
  });

  it("renders correct star rating aria-label for each card", () => {
    testimonials.forEach((testimonial) => {
      const card = screen.getByText(testimonial.quote).closest("article")!;
      const starContainer = within(card).getByRole("group", {
        name: `Rated ${testimonial.stars} out of 5 stars`,
      });
      expect(starContainer).toBeInTheDocument();
    });
  });
});
