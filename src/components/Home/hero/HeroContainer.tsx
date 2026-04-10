import classNames from "classnames";
import { motion } from "motion/react";
import {
  ContainerVariants,
  badgeVariants,
  titleVariants,
  childVariants,
  BtnsContainerVariants,
  type ChildCustom,
} from "../../common/Variants";
import { ButtonContainer, ButtonText } from "../../common/MainButton";

export const TITLE = "Intelligent Automation for Modern Businesses.";
export const PARAGRAPH =
  "Xtract brings AI automation to your fingertips & streamlines tasks.";

const titleWords = TITLE.split(" ");
const paragraphWords = PARAGRAPH.split(" ");

const HeroContainer = () => {
  return (
    <motion.div
      variants={ContainerVariants}
      initial="hidden"
      animate="visible"
      className={classNames(
        "my-container absolute top-1/2 left-1/2 -translate-1/2",
        "grid w-full flex-col gap-8",
      )}
    >
      <div
        className={classNames(
          "rounded-full border border-white/10 bg-black/25 p-1.25",
          "flex overflow-hidden",
          "text-sm text-white",
          "mx-auto w-fit",
        )}
      >
        <span className="bg-primary rounded-full px-2">New</span>

        <motion.span variants={badgeVariants} className="whitespace-nowrap">
          Automated Lead Generation
        </motion.span>
      </div>
      <motion.h1
        variants={titleVariants}
        custom={1.1}
        className={classNames(
          "mx-auto flex max-w-185 flex-wrap justify-center gap-3",
          "text-center font-semibold text-white",
          "text-3xl md:text-6xl",
        )}
      >
        <span className="sr-only">{TITLE}</span>
        <AnimatedWords words={titleWords} duration={0.6} />
      </motion.h1>
      <motion.p
        variants={titleVariants}
        custom={1.1}
        className="text-neutral-light flex flex-wrap justify-center gap-1.25 text-center font-semibold"
        data-testid="intro-paragraph"
      >
        <span className="sr-only">{PARAGRAPH}</span>
        <AnimatedWords words={paragraphWords} duration={0.6} />
      </motion.p>

      <motion.div
        variants={BtnsContainerVariants}
        initial="hidden"
        animate="visible"
        className="flex justify-center gap-2"
      >
        <ButtonContainer
          as="link"
          to={"contact"}
          className="bg-primary cursor-pointer rounded-md text-white"
        >
          <ButtonText className="flex items-center gap-2">
            Get in Touch <IconSvg />
          </ButtonText>
        </ButtonContainer>

        <ButtonContainer
          as="a"
          href="#our-service"
          className="cursor-pointer rounded-md border border-white/15 bg-black/25"
        >
          <ButtonText className="flex items-center gap-2">
            View services
          </ButtonText>
        </ButtonContainer>
      </motion.div>
    </motion.div>
  );
};

export const AnimatedWords = ({
  words,
  duration,
}: {
  words: string[];
  duration: number;
}) => (
  <>
    {words.map((word, i) => (
      <motion.span
        key={`${word}-${i}`}
        aria-hidden={true}
        variants={childVariants}
        custom={{ duration } satisfies ChildCustom}
      >
        {word}
      </motion.span>
    ))}
  </>
);

export const IconSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      data-testid="svg"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
};

export default HeroContainer;
