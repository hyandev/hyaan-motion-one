import img1 from "../../../assets/img1.avif";
import imgtwo from "../../../assets/imgtwo.avif";
import imgthree from "../../../assets/imgthree.avif";
import imgfour from "../../../assets/imgfour.avif";
import logoone from "../../../assets/logoone.svg";
import logotwo from "../../../assets/logotwo.svg"; // Assuming naming convention for LOQO
import logothree from "../../../assets/logothree.svg";

export interface Slide {
  id: number | string;
  client: string;
  logo: string;
  logoAlt: string;
  image: string;
  imageAlt: string;
  headline: string;
  description: string;
  impact: string[];
}

const slides: Slide[] = [
  {
    id: 1,
    client: "TrailForge",
    logo: logoone,
    logoAlt: "Logoipsum logo",
    image: img1,
    imageAlt:
      "A sleek, matte black hardshell briefcase sitting on a dark stone surface.",
    headline: "AI-driven forecasting cut inventory waste by 40% for TrailForge",
    description:
      "TrailForge, a suitcase brand, faced stock issues and inefficiencies. Our AI forecasting optimized inventory and production cycles, helping them save costs and deliver faster.",
    impact: [
      "40% Less Inventory Waste",
      "35% Faster Production",
      "20% More Accurate Forecasting",
      "25% Faster Fulfillment",
    ],
  },
  {
    id: 2,
    client: "MedixChain",
    logo: logotwo,
    logoAlt: "LOQO logo",
    image: imgtwo,
    imageAlt:
      "An industrial warehouse interior with a yellow forklift in the center aisle.",
    headline:
      "AI-powered workflows reduced error rate by 80% in daily operations",
    description:
      "MedixChain, a healthcare logistics company, was dealing with frequent data errors and delays. We introduced AI validation and live tracking to improve accuracy and speed across their supply chain.",
    impact: [
      "80% Error reduction",
      "90% Accuracy in Data Logs",
      "30% Faster Delivery",
      "60+ Hours Saved",
    ],
  },
  {
    id: 3,
    client: "FinSolve",
    logo: logoone,
    logoAlt: "Logoipsum logo",
    image: imgthree,
    imageAlt:
      "A luxury black credit card with gold marble veins resting on a dark marble surface.",
    headline: "Automating 50% of operations saved 20% in costs within 2 months",
    description:
      "FinSolve, a financial services firm, was overloaded with repetitive admin tasks. By automating internal workflows and integrating data systems, they streamlined operations and reduced overhead.",
    impact: [
      "50% Operations Automated",
      "20% Cost Reduction",
      "70+ Hours Saved/Month",
      "2x Faster Client Onboarding",
    ],
  },
  {
    id: 4,
    client: "ScaleByte",
    logo: logothree,
    logoAlt: "IPSUM logo",
    image: imgfour,
    imageAlt:
      "A person using a laptop displaying a messaging app next to a cup of coffee.",
    headline:
      "AI integration helped ScaleByte close 3x more deals in less time",
    description:
      "ScaleByte’s sales team struggled with follow-up delays. Our AI sales assistant automated outreach, lead scoring, and CRM updates—resulting in faster responses and more closed deals.",
    impact: [
      "3x More Deals",
      "40% Faster Responses",
      "95% Lead Accuracy",
      "CRM Fully Synced",
    ],
  },
];

export default slides;
