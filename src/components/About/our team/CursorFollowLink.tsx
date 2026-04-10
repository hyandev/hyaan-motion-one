import { type AnchorHTMLAttributes } from "react";
import { cn } from "../../../lib/utils";
import { motion, MotionValue } from "motion/react";

type FollowLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "className"
> & {
  className?: string;
  isHover: boolean;
  x: MotionValue<number>;
  y: MotionValue<number>;
};

const CursorFollowLink = ({
  children,
  className,
  isHover,
  x,
  y,
}: FollowLinkProps) => {
  return (
    isHover && (
      <motion.span
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className={cn(
          "pointer-events-none fixed top-0 left-0 z-50 w-fit cursor-none bg-[#0d0d0d] px-3 text-white",
          "border-neutral-surface/15 rounded-md border will-change-transform",
          className,
        )}
      >
        {children}
      </motion.span>
    )
  );
};
export default CursorFollowLink;
