import { motion } from "motion/react";
import { articleSlideUpVariants, containerArticleVariants } from "./Variants";
import classNames from "classnames";
import type React from "react";

type FeatureCardContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const FeatureCardContainer = ({
  children,
  className,
}: FeatureCardContainerProps) => {
  return (
    <motion.div
      variants={containerArticleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 1 }}
      className={classNames(
        "bg-near-black rounded-2xl min-[900px]:max-w-120",
        "overflow-hidden p-3.5 min-[900px]:px-12 min-[900px]:pt-10 min-[900px]:pb-4",
        "w-full",
        className,
      )}
    >
      <motion.article
        variants={articleSlideUpVariants}
        className={classNames(
          "border-neutral-surface/15 rounded-2xl border",
          "overflow-hidden bg-black p-3",
          "mask-[linear-gradient(to_bottom,black_75%,transparent_100%)]",
        )}
      >
        {children}
      </motion.article>
    </motion.div>
  );
};

export default FeatureCardContainer;
