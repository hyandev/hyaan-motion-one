import classNames from "classnames";
import type { PricingPlan } from "./pricingData";
import { ButtonContainer, ButtonText } from "../../common/MainButton";
import { Check } from "lucide-react";
import { memo } from "react";
import { motion } from "motion/react";
import { planVariants } from "../../common/Variants";

interface PlanCardProps {
  plan: PricingPlan;
  isOn: boolean;
  index: number;
}

const PlanCard = ({ plan, isOn, index }: PlanCardProps) => {
  return (
    <motion.article
      variants={planVariants}
      initial="initial"
      whileInView="animate"
      custom={index}
      viewport={{ once: true, amount: 0.5 }}
      className={classNames(
        "flex flex-col gap-4 p-5",
        "border-neutral-surface/15 rounded-xl border bg-no-repeat",
        plan.isPopular ? "bg-popular" : "bg-regular",
      )}
    >
      <div className="text-neutral-muted flex items-center gap-3">
        <plan.icon size={25} fill="currentColor" />
        <h3 className="text-[22px] font-semibold">{plan.name}</h3>
      </div>
      {plan.isCustom ? (
        <span className="text-4xl font-medium text-white">Custom</span>
      ) : (
        <div className="flex items-end">
          <span className="text-4xl font-medium text-white">
            ${isOn ? plan.annually_price : plan.monthly_price}
          </span>
          <span className="text-neutral-muted font-semibold">/month</span>
        </div>
      )}
      <p className="text-neutral-muted font-semibold">{plan.description}</p>
      <ButtonContainer
        as="a"
        href="#"
        aria-label={`Choose ${plan.name} plan`}
        className={classNames(
          plan.isPopular ? "bg-primary" : "border-neutral-surface/15 border",
          "mt-4 cursor-pointer rounded-md",
        )}
      >
        <ButtonText className="w-full text-center">
          {plan.buttonText}
        </ButtonText>
      </ButtonContainer>
      <div className="mt-4">
        <h4 className="text-neutral-muted font-bold">What's Included:</h4>
        <div className="mt-3 flex flex-col gap-3">
          {plan.features.map((item) => (
            <div
              key={`${plan.id}-${item}`}
              className="text-neutral-surface flex items-center gap-2"
            >
              <Check size={22} />
              <span className="text-[15px] font-semibold">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default memo(PlanCard);
