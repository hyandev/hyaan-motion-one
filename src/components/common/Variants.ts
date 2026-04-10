import { type Variants } from "motion/react";

export type ChildCustom = {
  duration: number;
};

const TIMING = {
  containerDelay: 1,
  delay: 2,
  btnsContainerDelay: 2.5,
} as const;

export const LinkVariants: Variants = {
  whileHover: {
    y: [0, -10, 10, 0],
    opacity: [1, 0, 0, 1],
    transition: { duration: 0.35, ease: "linear" },
  },

  animate: {
    y: [0, 10, -10, 0],
    opacity: [1, 0, 0, 1],
    transition: { duration: 0.35, ease: "linear" },
  },
};

export const ContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom) => ({
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: custom ? custom : TIMING.containerDelay,
    },
  }),
};

export const badgeVariants: Variants = {
  hidden: {
    marginLeft: 0,
    maxWidth: 0,
    opacity: 0,
    clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
  },
  visible: {
    marginLeft: 10,
    maxWidth: 400,
    opacity: 1,
    clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
    transition: { duration: 0.6, delay: 1.1 },
  },
};

export const titleVariants: Variants = {
  hidden: {},
  visible: (custom) => ({
    transition: {
      delayChildren: custom ? custom : TIMING.delay,
      staggerChildren: 0.03,
    },
  }),
};

export const childVariants: Variants = {
  hidden: {
    y: 20,
    opacity: 0,
    filter: "blur(6px)",
  },

  visible: (custom: ChildCustom) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: custom.duration },
  }),
};
export const BtnsContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: { duration: 0.8, delay: 1.2 },
  },
};

export const HeaderVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export const containerArticleVariants: Variants = {
  hidden: {},
  visible: {},
};

export const articleSlideUpVariants: Variants = {
  hidden: {
    y: 300,
  },

  visible: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// ─── GlowOrb ───────────────────────────────────────────────────────────────

export const smCircleVariants: Variants = {
  initial: {
    rotate: 0,
  },

  animate: (settings: { clockwise: boolean; speed: number }) => ({
    rotate: settings.clockwise ? 360 : -360,
    transition: {
      duration: settings.speed,
      repeat: Infinity,
      ease: "linear",
    },
  }),
};

export const bigCircleVariants: Variants = {
  initial: {
    rotate: 0,
  },

  animate: (settings: { clockwise: boolean; speed: number }) => ({
    rotate: settings.clockwise ? 360 : -360,
    transition: {
      duration: settings.speed,
      repeat: Infinity,
      ease: "linear",
    },
  }),
};

// ─── Stepper ───────────────────────────────────────────────────────────────

type HandleAnimation = {
  bg: string[];
  times: number[];
};

const baseTransition = {
  delay: 1,
  duration: 7,
  repeat: Infinity,
  repeatDelay: 2.5,
};

export const ProgressIndicatorVariants: Variants = {
  animate: {
    originX: 0,
    scaleX: [0, 0.5, 0.5, 1, 1, 0],
    transition: {
      times: [0, 0.05, 0.4, 0.45, 0.99, 1],
      ...baseTransition,
    },
  },
};

export const progressHandlesVariants: Variants = {
  animate: (custom: HandleAnimation) => ({
    background: custom.bg,
    transition: {
      times: custom.times,
      ...baseTransition,
    },
  }),
};

// ─── Radar ───────────────────────────────────────────────────────────────

export const radarVariants: Variants = {
  initial: {
    rotate: 0,
  },

  animate: {
    rotate: 360,
    transition: {
      duration: 3.5,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// ─── Beam ───────────────────────────────────────────────────────────────

export const beamVariants: Variants = {
  initial: { x: 0, opacity: 1 },
  animate: {
    x: 250,
    opacity: [1, 1, 0],
    transition: {
      duration: 2,
      delay: 0.85,
      repeat: Infinity,
      repeatDelay: 0.4,
      ease: "easeOut",
    },
  },
};

// ─── Plan Card ───────────────────────────────────────────────────────────────

export const planVariants: Variants = {
  initial: { y: 25, opacity: 0 },
  animate: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: custom * 0.2,
    },
  }),
};

// ─── Trusted by ───────────────────────────────────────────────────────────────

export const TrustedParagraph: Variants = {
  initial: { y: 40, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const TrustedEmbla: Variants = {
  initial: { y: 40, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: "linear",
    },
  },
};

// ─── Why Us ───────────────────────────────────────────────────────────────

const DURATION = 0.6;

export const CardPositive: Variants = {
  initial: { x: 80, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: DURATION,
    },
  },
};

export const CardNegative: Variants = {
  initial: { x: -80, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: DURATION,
    },
  },
};

// ─── Our Team ───────────────────────────────────────────────────────────────

export const TeamCard: Variants = {
  initial: { y: 40, opacity: 0 },
  animate: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: custom * 0.2,
    },
  }),
};

// ─── Blog ───────────────────────────────────────────────────────────────

// Card

export const BlogVariants: Variants = {
  initial: { y: 30, opacity: 0 },
  animate: {
    y: 0,
    opacity: [0, 0, 1],
    transition: {
      duration: 0.8,
    },
  },
};

// ─── post

export const PostVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.2,
      delay: 0.3,
    },
  },
};

export const PostErrorVariants: Variants = {
  initial: { y: 40, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};
