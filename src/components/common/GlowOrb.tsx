import classNames from "classnames";
import { motion, type HTMLMotionProps } from "motion/react";
import React, {
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useState,
} from "react";
import { bigCircleVariants, smCircleVariants } from "./Variants";
import type { OrbPosition } from "../Home/hero/Hero";

const circleStyle = `aspect-square flex-none overflow-hidden will-change-transform rounded-full 
bg-[linear-gradient(229deg,rgb(129,74,200)_13%,rgba(201,201,201,0)_35.0235827429153%,rgba(164,92,219,0)_64.17244225559735%,#df7afe_88%)]`;

type GlowOrbContainer = {
  onMount?: (position: OrbPosition) => void;
  children: React.ReactNode;
  className?: string;
};

export const GlowOrbContainer = ({
  onMount,
  children,
  className,
  ...rest
}: GlowOrbContainer) => {
  const [childEl, setChildEl] = useState<HTMLDivElement | null>(null);

  const childrenArray = React.Children.toArray(children);
  const firstChild = childrenArray[0];

  useEffect(() => {
    if (!childEl || !onMount) return;
    const rect = childEl.getBoundingClientRect();
    onMount({
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height,
    });

    function updatePosition() {
      if (!childEl || !onMount) return;

      const rect = childEl.getBoundingClientRect();
      onMount({
        x: rect.x,
        y: rect.y,
        width: rect.width,
        height: rect.height,
      });
    }

    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, [onMount, childEl]);

  const clonedChild = isValidElement(firstChild)
    ? cloneElement(firstChild as React.ReactElement<any>, {
        ref: setChildEl,
      })
    : firstChild;

  return (
    <div className={classNames(className)} aria-hidden={true} {...rest}>
      {clonedChild}
      {childrenArray.slice(1)}
    </div>
  );
};

type circleType = {
  className: string;
} & HTMLMotionProps<"div">;

export const BigCircle = forwardRef<HTMLDivElement, circleType>(
  ({ className, ...rest }, ref) => (
    <motion.div
      ref={ref}
      variants={bigCircleVariants}
      initial="initial"
      animate="animate"
      className={classNames("absolute", circleStyle, className)}
      {...rest}
    ></motion.div>
  ),
);

BigCircle.displayName = "BigCircle";

export const SmallCircle = ({ className, ...rest }: circleType) => (
  <motion.div
    variants={smCircleVariants}
    initial="initial"
    animate="animate"
    className={classNames("relative", circleStyle, className)}
    {...rest}
  ></motion.div>
);
