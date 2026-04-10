import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { motion, type HTMLMotionProps, type Variants } from "motion/react";

interface Container extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
}

const articleSlideUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: custom,
    },
  }),
};

export const StepCardContainer = ({
  children,
  className,
  ...props
}: Container) => {
  return (
    <motion.div
      {...props}
      initial="hidden"
      whileInView="visible"
      variants={articleSlideUpVariants}
      viewport={{ once: true, amount: 0.3 }}
      className={twMerge(
        "bg-near-black border-neutral-surface/15 rounded-2xl border p-4.5 sm:p-8",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};
