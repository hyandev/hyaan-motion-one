import { BarChart3, Clock, Zap, type LucideIcon } from "lucide-react";

type stats = {
  id: number;
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
};

export const stats: stats[] = [
  {
    id: 1,
    icon: BarChart3,
    value: "150+",
    label: "Businesses",
    description:
      "Companies have streamlined their workflows with Xtract’s AI solutions.",
  },
  {
    id: 2,
    icon: Clock,
    value: "1M+",
    label: "Hours",
    description:
      "Reducing manual work and boosting productivity through automation.",
  },
  {
    id: 3,
    icon: Zap,
    value: "95%",
    label: "Faster",
    description:
      "Clients see improved efficiency within the first three months of usage.",
  },
];
