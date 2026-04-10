import {
  Zap,
  Handshake,
  Clock,
  Receipt,
  ChartPie,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export type BusinessBenefit = {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
};

export const AI_BENEFITS: BusinessBenefit[] = [
  {
    id: "productivity",
    title: "Increased Productivity",
    description:
      "Gain actionable insights with AI-driven analytics to improve decision-making and strategy.",
    Icon: Zap,
  },
  {
    id: "experience",
    title: "Better Customer Experience",
    description:
      "Personalized AI interactions improve response times, customer engagement, and overall satisfaction.",
    Icon: Handshake,
  },
  {
    id: "availability",
    title: "24/7 Availability",
    description:
      "AI-powered systems operate around the clock, ensuring seamless support and execution without downtime.",
    Icon: Clock,
  },
  {
    id: "cost",
    title: "Cost Reduction",
    description:
      "AI automation minimizes manual work, cuts operational costs, and optimizes resource allocation for better profitability.",
    Icon: Receipt,
  },
  {
    id: "insights",
    title: "Data-Driven Insights",
    description:
      "Leverage AI to analyze vast data sets, identify trends, and make smarter, faster, and more accurate business decisions.",
    Icon: ChartPie,
  },
  {
    id: "scalability",
    title: "Scalability & Growth",
    description:
      "AI adapts to your business needs, allowing you to scale efficiently without increasing workload or costs.",
    Icon: TrendingUp,
  },
];
