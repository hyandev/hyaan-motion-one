import classNames from "classnames";
import { motion } from "motion/react";
import {
  progressHandlesVariants,
  ProgressIndicatorVariants,
} from "../../common/Variants";

const MainStyle = "absolute block size-2.5 -top-1.25  rounded-full";

const Stepper = () => {
  return (
    <div aria-hidden={true} className="relative m-4">
      <span className="absolute -z-10 h-px w-full rounded-full bg-gray-400/10"></span>

      <motion.span
        variants={ProgressIndicatorVariants}
        whileInView="animate"
        className="bg-primary relative block h-px w-full rounded-full"
      ></motion.span>
      <span className={classNames(MainStyle, "bg-primary")}></span>
      <motion.span
        variants={progressHandlesVariants}
        whileInView="animate"
        custom={{
          bg: ["#814ac89c", "#814ac8", "#814ac8", "#814ac89c"],
          times: [0, 0.1, 0.99, 1],
        }}
        className={classNames(MainStyle, "left-1/2")}
      ></motion.span>
      <motion.span
        variants={progressHandlesVariants}
        whileInView="animate"
        custom={{
          bg: ["#814ac89c", "#814ac89c", "#814ac8", "#814ac8", "#814ac89c"],
          times: [0, 0.44, 0.45, 0.99, 1],
        }}
        className={classNames(MainStyle, "right-0")}
      ></motion.span>
    </div>
  );
};

export default Stepper;
