import { motion } from "motion/react";
import { PostErrorVariants } from "./Variants";
import { ButtonContainer, ButtonText } from "./MainButton";
import { cn } from "../../lib/utils";

const Error = ({ message, to = "/" }: { message: string; to: string }) => {
  return (
    <motion.div
      variants={PostErrorVariants}
      initial="initial"
      animate="animate"
      className="flex h-screen flex-col items-center justify-center gap-3.5"
    >
      <p className="text-center text-5xl leading-15 font-semibold text-white">
        404 <br /> {message}
      </p>{" "}
      <ButtonContainer
        as="link"
        to={to}
        className={cn(
          "bg-primary rounded-md text-white",
          "cursor-pointer max-md:justify-center",
        )}
      >
        <ButtonText>Go Back</ButtonText>
      </ButtonContainer>
    </motion.div>
  );
};

export default Error;
