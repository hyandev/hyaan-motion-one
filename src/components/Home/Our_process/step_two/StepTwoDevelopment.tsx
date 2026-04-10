import { StepCardContainer } from "../StepCard";
import { Badge, Paragraph, Title } from "../../../common/Title";
import {
  AppWindow,
  ArrowLeft,
  ArrowRight,
  Blocks,
  File,
  Minus,
  Search,
  X,
} from "lucide-react";
import CodeArea from "./CodeArea";
import { type Step } from "../step_one/StepOneAnalyzing";

const StepTwoDevelopment = ({ custom }: Step) => {
  return (
    <StepCardContainer custom={custom} className="flex flex-col gap-3">
      <Badge className="text-xs">Step 2</Badge>
      <Title as="h4" className="text-[22px]">
        AI Development
      </Title>
      <Paragraph className="text-neutral-muted font-bold">
        Our team builds intelligent automation systems tailored to your business
        processes.
      </Paragraph>
      <article className="border-neutral-surface/18 mt-6 border">
        <div className="bg-rich-black flex items-center justify-between p-1.5">
          <div className="text-neutral-surface flex gap-1.5">
            <ArrowLeft size={13} strokeWidth={1.25} />
            <ArrowRight size={13} strokeWidth={1.25} />
          </div>
          <span className="bg-charcoal block h-3.25 w-3/11 rounded-xs"></span>
          <div className="text-neutral-surface flex gap-1.5">
            <AppWindow size={13} strokeWidth={1.25} />
            <Minus size={13} strokeWidth={1.25} />
            <X size={13} strokeWidth={1.25} />
          </div>
        </div>
        <div className="flex">
          <div className="text-neutral-surface bg-rich-black flex flex-col gap-3 px-1.5 pt-2">
            <File size={18} strokeWidth={1.25} />
            <Search size={18} strokeWidth={1.25} />
            <Blocks size={18} strokeWidth={1.25} />
          </div>
          <CodeArea />
        </div>
      </article>
    </StepCardContainer>
  );
};

export default StepTwoDevelopment;
