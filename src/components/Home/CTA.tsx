import classNames from "classnames";
import { ButtonContainer, ButtonText } from "../common/MainButton";
import { IconSvg } from "./hero/HeroContainer";
import { motion } from "motion/react";
import { HeaderVariants } from "../common/Variants";

const CTA = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={HeaderVariants}
      viewport={{ once: true, amount: 0.5 }}
      id="cta"
      className={classNames(
        "mx-auto mt-17 w-full max-w-195 rounded-xl px-4 py-10 max-md:mx-auto max-md:w-12/13 md:mt-35 md:py-20",
        "flex flex-col items-center justify-center gap-4",
        "bg-[linear-gradient(135deg,#321d4d,#0a0a0a_25%_75%,#321d4d)]",
      )}
    >
      <h2 className="max-w-140 text-center text-3xl leading-15 font-semibold text-white md:text-5xl">
        Let AI do the Work so you can Scale Faster
      </h2>
      <p className="text-neutral-muted text-[14.5px] font-bold md:text-[17px]">
        Book a Call Today and Start Automating
      </p>
      <ButtonContainer className="bg-primary w-fit cursor-pointer rounded-md">
        <ButtonText className="flex items-center gap-2">
          Book a free call <IconSvg />
        </ButtonText>
      </ButtonContainer>
    </motion.section>
  );
};

export default CTA;
