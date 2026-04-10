import { render, screen, within } from "@testing-library/react";
import { Container, Badge, Title, Paragraph } from "../Title";
import { HeaderVariants } from "../Variants";

describe("Title", () => {
  beforeEach(() => {
    render(
      <Container as="header" variants={HeaderVariants}>
        <Badge>Our Services</Badge>
        <Title as="h3" className="py-6 text-center text-5xl">
          AI Solutions That Take Your Business to the Next Level
        </Title>
        <Paragraph className="text-neutral-surface">
          We design, develop, and implement automation tools that help you work
          smarter, not harder
        </Paragraph>
      </Container>,
    );
  });

  it("should render all sub-components within the container", () => {
    const container = screen.getByRole("banner");

    const badgeElm = within(container).getByText(/our services/i);
    expect(badgeElm).toBeInTheDocument();
    expect(badgeElm).toHaveClass("text-neutral-light text-center");

    const titleElm = within(container).getByRole("heading", { level: 3 });
    expect(titleElm).toHaveTextContent(/AI Solutions/i);

    const paragraphElm = within(container).getByText(/we design, develop/i);
    expect(paragraphElm).toBeInTheDocument();
    expect(paragraphElm).toHaveClass("text-neutral-surface");
  });
});
