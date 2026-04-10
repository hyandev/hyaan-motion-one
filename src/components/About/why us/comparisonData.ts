import { Check, X } from "lucide-react";

export const comparisonData = [
  {
    id: "manual",
    title: "Manual Work",
    status: "negative",
    icon: X,
    features: [
      "Prone to Human Errors",
      "Limited by Work Hours",
      "High Labor Costs & Overhead",
      "Slow & Time-Consuming Tasks",
      "Disconnected & Repetitive Work",
      "Inconsistent & Dependent on Workforce",
    ],
  },
  {
    id: "ai",
    title: "Xtract AI Automation",
    status: "positive",
    icon: Check,
    features: [
      "Smart, AI-Driven Decisions",
      "24/7 Automated Workflows",
      "Scalable & Cost-Effective",
      "Instant Data Processing",
      "Seamless System Integration",
      "Consistent & Reliable Output",
    ],
  },
];
