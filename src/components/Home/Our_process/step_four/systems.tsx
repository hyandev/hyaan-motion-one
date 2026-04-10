import {
  type LucideIcon,
  MessageSquare,
  Settings,
  Filter,
  Loader2,
  Check,
  ArrowUp,
} from "lucide-react";
import type { Variants } from "motion/react";

const Var: Variants = {
  animate: {
    y: [0, -10, 10, 0],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.5,
      ease: "easeOut",
      repeat: Infinity,
      repeatDelay: 2,
    },
  },
};

export interface SystemItem {
  id: number;
  title: string;
  description: string;
  Icon: LucideIcon;
  StatusIcon: LucideIcon;
  statusColor: string;
  isLoading?: boolean;
  withAnimation?: boolean;
  animate?: Variants;
}

export const systems: SystemItem[] = [
  {
    id: 1,
    title: "Chatbot system",
    description: "Efficiency will increase by 20%",
    Icon: MessageSquare,
    StatusIcon: Loader2,
    statusColor: "text-purple-500",
    isLoading: true,
  },
  {
    id: 2,
    title: "Workflow system",
    description: "Update available..",
    Icon: Settings,
    StatusIcon: ArrowUp,
    statusColor: "text-purple-500",
    withAnimation: true,
    animate: Var,
  },
  {
    id: 3,
    title: "Sales system",
    description: "Up to date",
    Icon: Filter,
    StatusIcon: Check,
    statusColor: "text-purple-500",
  },
];
