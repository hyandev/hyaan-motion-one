import classNames from "classnames";
import { motion } from "motion/react";
import {
  ContainerVariants,
  titleVariants,
  BtnsContainerVariants,
} from "../common/Variants";
import { AnimatedWords } from "../Home/hero/HeroContainer";
import { Badge } from "../common/Title";

export const TITLE = "Unlock AI Insights with Us";
export const PARAGRAPH =
  "Stay informed with the latest AI trends, insights, and strategies to drive innovation and business growth.";

const titleWords = TITLE.split(" ");
const paragraphWords = PARAGRAPH.split(" ");

const BlogContainer = () => {
  return (
    <motion.div
      variants={ContainerVariants}
      initial="hidden"
      animate="visible"
      custom={0.2}
      className={classNames(
        "relative grid gap-8 pt-40 md:mb-18",
        "mx-auto w-full max-w-200",
      )}
    >
      <Badge className="mx-auto">Blog</Badge>
      <motion.h1
        variants={titleVariants}
        aria-label={TITLE}
        custom={0.5}
        className={classNames(
          "flex flex-wrap justify-center gap-3",
          "text-center font-bold text-white",
          "text-3xl md:text-6xl",
        )}
      >
        <AnimatedWords words={titleWords} duration={0.8} />
      </motion.h1>
      <motion.p
        variants={titleVariants}
        aria-label={PARAGRAPH}
        custom={0.5}
        className="text-neutral-light mx-auto flex max-w-135 flex-wrap justify-center gap-1.25 text-center font-semibold"
      >
        <AnimatedWords words={paragraphWords} duration={0.6} />
      </motion.p>

      <motion.div
        variants={BtnsContainerVariants}
        initial="hidden"
        animate="visible"
        className="flex justify-center gap-2"
      ></motion.div>
    </motion.div>
  );
};

export default BlogContainer;
