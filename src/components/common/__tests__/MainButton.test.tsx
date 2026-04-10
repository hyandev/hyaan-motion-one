import { render, screen, within } from "@testing-library/react";
import { ButtonContainer, ButtonText } from "../MainButton";

describe("ButtonContainer", () => {
  const setup = () => {
    render(
      <ButtonContainer as="a" href="#home" className="bg-primary mx-auto w-fit">
        <ButtonText data-testid="button-text">Wassim</ButtonText>
      </ButtonContainer>,
    );
  };

  beforeEach(() => {
    setup();
  });

  it("renders as a link with correct attributes", () => {
    const link = screen.getByRole("link");

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "#home");
    expect(link).toHaveClass("bg-primary");

    const text = within(link).getByTestId("button-text");

    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent(/wassim/i);
  });
});
