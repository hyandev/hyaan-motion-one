import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import classNames from "classnames";

import { Accordion } from "../Accordion";
import { faqs } from "../../Home/FAQs/faqData";

const faqItem = faqs[0];

describe("Accordion", () => {
  const setup = () => {
    render(
      <Accordion
        className="flex flex-col gap-3.5 bg-transparent text-white"
        multiple
      >
        <Accordion.Item
          value={faqItem.question}
          className={classNames(
            "group",
            "border-neutral-surface/15 rounded-lg border transition-all duration-300",
            "focus-within:outline-none",
            "focus-within:has-focus-visible:ring-2 focus-within:has-focus-visible:ring-white",
          )}
        >
          <Accordion.Trigger className="flex w-full cursor-pointer items-center justify-between p-4 text-left outline-none focus:outline-none">
            <span className="font-medium">{faqItem.question}</span>
          </Accordion.Trigger>

          <Accordion.Content data-testid="accordion-content">
            <div className="min-h-0 overflow-hidden">
              <p className="text-neutral-muted p-4 pt-0 text-left text-[15px] font-semibold">
                {faqItem.answer}
              </p>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>,
    );

    return {
      user: userEvent.setup(),
      trigger: screen.getByRole("button", {
        name: faqItem.question,
      }),
      content: screen.getByTestId("accordion-content"),
    };
  };

  it("toggles accordion item when clicked", async () => {
    const { user, trigger, content } = setup();
    expect(trigger).toHaveAttribute(
      "data-controls",
      expect.stringMatching(/content/),
    );

    // Initial state
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(content).toHaveAttribute("data-state", "closed");
    expect(content).not.toBeVisible();

    // Open
    await user.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(content).toHaveAttribute("data-state", "open");
    expect(content).toBeVisible();

    // Close again
    await user.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(content).toHaveAttribute("data-state", "closed");
    expect(content).not.toBeVisible();
  });
});
