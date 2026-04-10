import { Crown, Rocket, Zap, type LucideIcon } from "lucide-react";

export interface PricingPlan {
  id: string;
  name: string;
  monthly_price?: string | number;
  annually_price?: string | number;
  description: string;
  buttonText: string;
  isPopular: boolean;
  isCustom?: boolean;
  icon: LucideIcon;
  features: string[];
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    monthly_price: 49,
    annually_price: 37,
    description: "Advanced automation to scale your productivity.",
    buttonText: "Choose this plan",
    isPopular: false,
    icon: Rocket,
    features: [
      "Basic workflow automation",
      "AI-powered personal assistant",
      "Standard analytics & reporting",
      "Email & chat support",
      "Up to 3 AI integrations",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    monthly_price: 99,
    annually_price: 75,
    description: "Maximum security and scale for organizations.",
    buttonText: "Choose this plan",
    isPopular: true,
    icon: Zap,
    features: [
      "Advanced workflow automation",
      "AI-driven sales & marketing tools",
      "Enhanced data analytics & insights",
      "Priority customer support",
      "Up to 10 AI integrations",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Perfect for small businesses starting with AI automation.",
    buttonText: "Schedule a call",
    isPopular: false,
    isCustom: true,
    icon: Crown,
    features: [
      "Fully customizable AI automation",
      "Dedicated AI business consultant",
      "Enterprise-grade compliance",
      "24/7 VIP support",
      "Unlimited AI integrations",
    ],
  },
];
