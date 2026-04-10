import classNames from "classnames";
import { Badge, Paragraph, Title } from "../../../common/Title";
import { StepCardContainer } from "../StepCard";
import { motion } from "motion/react";
import { radarVariants } from "../../../common/Variants";
import { menuItems } from "./menuItems";

export type Step = {
  custom?: number;
};

const StepOneAnalyzing = ({ custom }: Step) => {
  return (
    <StepCardContainer custom={custom} className="flex flex-col gap-3">
      <Badge className="text-xs">Step 1</Badge>
      <Title as="h3" className="text-[22px]">
        Smart Analyzing
      </Title>
      <Paragraph className="text-neutral-muted font-bold">
        We assess your needs and identify AI solutions to streamline workflows
        and improve efficiency.
      </Paragraph>
      <article className="mt-6 grid grid-cols-2 gap-2 max-[450px]:grid-cols-1">
        <div className="border-neutral-surface/15 flex flex-col justify-center border py-2">
          <div className="border-neutral-surface/15 mx-auto size-28 rounded-full border">
            <motion.span
              aria-hidden="true"
              variants={radarVariants}
              initial="initial"
              animate="animate"
              className={classNames(
                "block size-full rounded-full",
                "bg-[conic-gradient(rgba(153,238,255,0)_329.73deg,rgba(129,74,200,0.2)_337.076deg,rgba(129,74,200,0.6)_360deg)]",
              )}
            ></motion.span>
          </div>
          <span className="text-neutral-surface mx-auto mt-1.5 block w-fit text-[11px] font-semibold">
            Analyzing current workflow..
          </span>
        </div>
        <div
          className={classNames(
            "flex flex-col gap-1",
            "border-neutral-surface/10 border px-1.5 py-2.5",
          )}
        >
          {menuItems.map((item, index) => (
            <div
              key={item.label}
              className={classNames(
                "text-neutral-surface text-xss flex gap-1.5",
                "border-neutral-surface/10 rounded-xs border px-1 py-1",
                !index && "bg-rich-black",
              )}
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </article>
    </StepCardContainer>
  );
};

export default StepOneAnalyzing;
