import { DollarSign, Music2 } from "lucide-react";
import type { TargetAndTransition, Transition } from "motion/react";
import type { ReactNode } from "react";

const Duration = 0.4;

export interface TaskAnimation {
  init: TargetAndTransition;
  anime: TargetAndTransition & { transition?: Transition };
  exit?: TargetAndTransition & { transition?: Transition };
}

export interface ScheduleItem {
  id: number;
  title: string | null;
  startTime: string | null;
  endTime: string | null;
  isEmpty: boolean;
  animate: TaskAnimation;
  icon?: ReactNode;
  message?: string;
}

export const PRIMARY_SCHEDULE: ScheduleItem[] = [
  {
    id: 1,
    title: "Custom automation",
    icon: <Music2 size={16} className="text-neutral-surface ml-auto" />,
    startTime: "06:00 pm",
    endTime: "06:30 pm",
    isEmpty: false,
    animate: {
      init: { y: 0, x: 0 },
      anime: { y: 0, x: 0, transition: { duration: Duration } },
    },
  },
  {
    id: 2,
    title: "Lead gen. tutorial",
    startTime: "06:00 pm",
    endTime: "06:30 pm",
    icon: <DollarSign size={16} className="text-neutral-surface ml-auto" />,
    isEmpty: false,
    animate: {
      init: { y: 0 },
      anime: { y: -40, transition: { duration: Duration } },
    },
  },
  {
    id: 3,
    title: null,
    startTime: null,
    endTime: null,
    icon: null,
    message: "No meeting today.",
    isEmpty: true,
    animate: {
      init: { y: -15.5, x: 0 },
      anime: {
        y: -15.5,
        x: "40%",
        transition: { duration: Duration },
      },
      exit: {
        x: 70,
        y: 0,
        opacity: [0.2, 0.1, 0],
        transition: { duration: 0.3 },
      },
    },
  },
];

export const SECONDARY_SCHEDULE: ScheduleItem[] = [
  {
    id: 4,
    title: "Discovery call",
    startTime: "10:30 am",
    endTime: "06:30 am",
    isEmpty: false,
    animate: {
      init: { y: 0 },
      anime: { y: 0, transition: { duration: Duration } },
    },
  },
  {
    id: 5,
    title: "Efficiency testing",
    startTime: "10:30 pm",
    endTime: "06:30 pm",
    isEmpty: false,
    animate: {
      init: { y: 0, opacity: 1 },
      anime: { y: 40, transition: { duration: Duration } },
    },
  },
  {
    id: 6,
    title: null,
    startTime: null,
    endTime: null,
    isEmpty: true,
    animate: {
      init: { y: 0 },
      anime: { y: 40, transition: { duration: Duration } },
    },
  },
];
