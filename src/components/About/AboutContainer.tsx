import classNames from "classnames";
import { motion } from "motion/react";
import {
  ContainerVariants,
  titleVariants,
  BtnsContainerVariants,
} from "../common/Variants";
import { AnimatedWords } from "../Home/hero/HeroContainer";
import { Badge } from "../common/Title";

export const TITLE = "Helping Businesses Grow";
export const PARAGRAPH =
  "Xtract helps businesses streamline operations and grow faster with AI-powered automation.";

const titleWords = TITLE.split(" ");
const paragraphWords = PARAGRAPH.split(" ");

const AboutContainer = () => {
  return (
    <motion.div
      variants={ContainerVariants}
      initial="hidden"
      animate="visible"
      custom={0.2}
      className={classNames(
        "mt-5 grid gap-8 md:mb-18",
        "my-container mx-auto w-full max-w-200 flex-col",
      )}
    >
      <Badge className="mx-auto">About Us</Badge>
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

export default AboutContainer;
