import { render, screen, within } from "@testing-library/react";
import Benefits from "./Benefits";
import { AI_BENEFITS } from "./benefitsData";

describe("Benefits component", () => {
  beforeEach(() => {
    render(<Benefits />);
  });

  it("renders the correct number of cards", () => {
    const cardsContainer = screen.getByTestId("cards-container");
    const cards = within(cardsContainer).getAllByRole("article");
    expect(cards).toHaveLength(AI_BENEFITS.length);
  });

  it("renders correct title for each card", () => {
    const cardsContainer = screen.getByTestId("cards-container");
    const cards = within(cardsContainer).getAllByRole("article");

    cards.forEach((card, index) => {
      const title = within(card).getByRole("heading", {
        level: 3,
        name: new RegExp(AI_BENEFITS[index].title, "i"),
      });
      expect(title).toBeInTheDocument();
    });
  });

  it("renders correct description for each card", () => {
    const cardsContainer = screen.getByTestId("cards-container");
    const cards = within(cardsContainer).getAllByRole("article");

    cards.forEach((card, index) => {
      const description = within(card).getByText(
        new RegExp(AI_BENEFITS[index].description, "i"),
      );
      expect(description).toBeInTheDocument();
    });
  });

  it("renders an icon for each card", () => {
    const cardsContainer = screen.getByTestId("cards-container");
    const cards = within(cardsContainer).getAllByRole("article");

    cards.forEach((card) => {
      const icon = card.querySelector("svg");
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveAttribute("aria-hidden", "true");
    });
  });
});
