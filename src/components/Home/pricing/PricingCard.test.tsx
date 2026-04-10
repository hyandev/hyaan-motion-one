import { render, screen, within } from "@testing-library/react";
import PlanCard from "./PlanCard";
import { pricingPlans } from "./pricingData";

describe("Pricing Plans Display", () => {
  // ─── Helpers ──────────────────────────────────────────────────────────────

  const assertCommonElements = (plan: (typeof pricingPlans)[0]) => {
    expect(
      screen.getByRole("heading", { level: 3, name: plan.name }),
    ).toBeInTheDocument();

    expect(screen.getByText(plan.description)).toBeInTheDocument();

    const linkButton = screen.getByRole("link", {
      name: `Choose ${plan.name} plan`,
    });

    expect(linkButton).toBeInTheDocument();
    expect(
      within(linkButton).getByText(new RegExp(plan.buttonText, "i")),
    ).toBeInTheDocument();

    plan.features.forEach((feature) => {
      expect(screen.getByText(new RegExp(feature, "i"))).toBeInTheDocument();
    });
  };

  // ─── Annual pricing toggle ON ──────────────────────────────────────────────

  describe("when the annual billing toggle is ON", () => {
    pricingPlans.forEach((plan) => {
      it(`renders the ${plan.name} plan with annual pricing`, () => {
        render(<PlanCard plan={plan} isOn={true} />);
        assertCommonElements(plan);

        if (!plan.isCustom && plan.annually_price && plan.monthly_price) {
          expect(
            screen.getByText(`$${plan.annually_price}`),
          ).toBeInTheDocument();
          expect(
            screen.queryByText(`$${plan.monthly_price}`),
          ).not.toBeInTheDocument();
        } else {
          expect(screen.getAllByText(/custom/i)).toHaveLength(2);
        }
      });
    });
  });

  // ─── Annual pricing toggle OFF ─────────────────────────────────────────────

  describe("when the annual billing toggle is OFF", () => {
    pricingPlans.forEach((plan, i) => {
      it(`renders the ${plan.name} plan with monthly pricing`, () => {
        render(<PlanCard plan={plan} isOn={false} index={i} />);
        assertCommonElements(plan);

        if (!plan.isCustom && plan.annually_price && plan.monthly_price) {
          expect(
            screen.getByText(`$${plan.monthly_price}`),
          ).toBeInTheDocument();
          expect(
            screen.queryByText(`$${plan.annually_price}`),
          ).not.toBeInTheDocument();
        } else {
          expect(screen.getAllByText(/custom/i)).toHaveLength(2);
        }
      });
    });
  });
});
