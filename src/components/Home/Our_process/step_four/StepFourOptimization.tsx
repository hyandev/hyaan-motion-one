import type { Step } from "../step_one/StepOneAnalyzing";
import { StepCardContainer } from "../StepCard";
import { Badge, Paragraph, Title } from "../../../common/Title";
import { systems } from "./systems";
import { motion } from "motion/react";
import classNames from "classnames";

const StepFourOptimization = ({ custom }: Step) => {
  return (
    <StepCardContainer custom={custom} className="flex flex-col gap-3">
      <Badge className="text-xs">Step 4</Badge>
      <Title as="h4" className="text-[22px]">
        Continuous Optimization
      </Title>
      <Paragraph className="text-neutral-muted font-bold">
        We refine performance, analyze insights, and enhance automation for
        long-term growth.
      </Paragraph>
      <div className="border-neutral-surface/15 mt-6 flex h-full max-h-40 flex-col gap-2.5 border px-2 py-2.5">
        {systems.map((item) => (
          <div
            key={item.id}
            className="border-neutral-surface/15 flex items-center justify-between rounded-md border p-1"
          >
            <div className="flex items-center gap-2">
              {/* Left Icon Container */}
              <div
                aria-hidden="true"
                className="bg-rich-black rounded-md p-1.75"
              >
                <item.Icon size={15} className="text-neutral-surface" />
              </div>

              {/* Text Content */}
              <div>
                <h5 className="text-neutral-surface text-xs font-medium">
                  {item.title}
                </h5>
                <p className="text-xss text-neutral-muted">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Right Status Icon */}
            <div
              aria-hidden="true"
              className={classNames(
                "text-primary",
                item.withAnimation &&
                  "bg-rich-black border-neutral-surface/10 overflow-hidden rounded-md border",
              )}
            >
              <motion.div
                variants={item.withAnimation ? item.animate : {}}
                animate={item.withAnimation ? "animate" : ""}
              >
                <item.StatusIcon
                  size={18}
                  className={classNames(item.isLoading && "animate-spin")}
                />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </StepCardContainer>
  );
};

export default StepFourOptimization;
