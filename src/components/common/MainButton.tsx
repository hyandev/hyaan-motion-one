import { motion, type HTMLMotionProps } from "motion/react";
import React from "react";
import { twMerge } from "tailwind-merge";
import { LinkVariants } from "./Variants";
import { Link, type LinkProps } from "react-router";

const motionElementsMap = {
  button: motion.button,
  div: motion.div,
  span: motion.span,
  a: motion.a,
  li: motion.li,
  link: motion.create(Link),
} as const;

type MotionElement = keyof typeof motionElementsMap;

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
};

type ButtonProps<T extends MotionElement> = T extends "link"
  ? BaseProps & Omit<HTMLMotionProps<T>, "ref"> & LinkProps & { as: "link" }
  : BaseProps & Omit<HTMLMotionProps<T>, "ref"> & { as?: T };

// ─── ButtonContainer ───────────────────────────────────────────────────────────────

const ButtonContainerInner = <T extends MotionElement = "button">(
  { as, children, className, ...rest }: ButtonProps<T>,
  ref: React.ForwardedRef<any>,
) => {
  const key = as ?? "button";
  const Component = motionElementsMap[key] as React.ElementType;
  return (
    <Component
      ref={ref}
      whileHover="whileHover"
      animate="animate"
      className={twMerge(
        "text-neutral-surface flex h-9 items-center px-2.5 text-sm font-medium",
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};

export const ButtonContainer = React.forwardRef(ButtonContainerInner) as <
  T extends MotionElement = "button",
>(
  props: ButtonProps<T> & {
    ref?: React.ForwardedRef<HTMLElementTagNameMap[T]>;
  },
) => React.ReactElement;

(ButtonContainer as React.ForwardRefExoticComponent<any>).displayName =
  "ButtonContainer";

// ─── ButtonText ───────────────────────────────────────────────────────────────

export const ButtonText = ({ children, className, ...rest }: BaseProps) => {
  return (
    <motion.span
      variants={LinkVariants}
      className={twMerge("will-change-transform", className)}
      {...rest}
    >
      {children}
    </motion.span>
  );
};
