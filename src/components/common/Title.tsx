import { motion, type HTMLMotionProps } from "motion/react";
import React from "react";
import { twMerge } from "tailwind-merge";

// ─── Container ───────────────────────────────────────────────────────────────

const motionElementsMap = {
  header: motion.header,
  section: motion.section,
  div: motion.div,
  main: motion.main,
  article: motion.article,
  aside: motion.aside,
} as const;

type MotionElement = keyof typeof motionElementsMap;

type ContainerProps<T extends MotionElement = "div"> = {
  as?: T;
} & Omit<HTMLMotionProps<T>, "ref"> & { children?: React.ReactNode };

const ContainerInner = <T extends MotionElement = "div">(
  { as, children, className, ...rest }: ContainerProps<T>,
  ref: React.ForwardedRef<HTMLElement>,
) => {
  const key = (as ?? "div") as MotionElement;
  const MotionTag = motionElementsMap[
    key
  ] as (typeof motionElementsMap)[typeof key];

  return (
    <MotionTag
      ref={ref as any}
      className={twMerge(
        "flex flex-col justify-center min-[900px]:w-6/10",
        className,
      )}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export const Container = React.forwardRef(ContainerInner) as <
  T extends MotionElement = "div",
>(
  props: ContainerProps<T> & {
    ref?: React.ForwardedRef<HTMLElementTagNameMap[T]>;
  },
) => React.ReactElement;

(Container as React.ForwardRefExoticComponent<any>).displayName = "Container";

// ─── Badge ───────────────────────────────────────────────────────────────
type BadgeProps = React.ComponentPropsWithoutRef<"span">;

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, className, ...rest }, ref) => (
    <span
      ref={ref}
      className={twMerge(
        "text-neutral-light text-center text-[14px] font-semibold",
        "w-fit px-1.75 py-1",
        "rounded-sm border border-white/15",
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  ),
);

Badge.displayName = "Badge";

// ─── Title ───────────────────────────────────────────────────────────────
type TitleProps<T extends React.ElementType> = {
  as?: T;
  children?: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<T>;

function TitleInner<T extends React.ElementType = "h2">(
  { as, children, className, ...rest }: TitleProps<T>,
  ref: React.ForwardedRef<HTMLElement>,
) {
  const Component = (as || "h2") as React.ElementType;

  return (
    <Component
      ref={ref}
      className={twMerge("font-semibold text-white", className)}
      {...rest}
    >
      {children}
    </Component>
  );
}

export const Title = React.forwardRef(TitleInner) as <
  T extends React.ElementType = "h2",
>(
  props: TitleProps<T> & { ref?: React.ForwardedRef<HTMLElement> },
) => React.ReactElement;

(Title as React.ForwardRefExoticComponent<any>).displayName = "Title";

// ─── Paragraph ───────────────────────────────────────────────────────────────
type ParagraphProps = React.ComponentPropsWithoutRef<"p">;

export const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ children, className, ...rest }, ref) => (
    <p ref={ref} className={className} {...rest}>
      {children}
    </p>
  ),
);

Paragraph.displayName = "Paragraph";
