import useEmblaCarousel from "embla-carousel-react";
import { Badge, Paragraph, Title } from "../../../common/Title";
import { StepCardContainer } from "../StepCard";
import { DiscordIcon, GmailIcon, OpenAIIcon, RadixIcon } from "./Icons";
import Autoplay from "embla-carousel-autoplay";
import classNames from "classnames";
import {
  BigCircle,
  GlowOrbContainer,
  SmallCircle,
} from "../../../common/GlowOrb";
import { motion } from "motion/react";
import { beamVariants } from "../../../common/Variants";

const StepThreeIntegration = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      axis: "y",
      align: "start",
      duration: 20, // Increase this slightly for a smoother "glide"
    },
    [
      Autoplay({
        delay: 2400,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        playOnInit: true,
      }),
    ],
  );
  return (
    <StepCardContainer className="flex flex-col gap-3">
      <Badge className="text-xs">Step 3</Badge>
      <Title as="h4" className="text-[22px]">
        Seamless Integration
      </Title>
      <Paragraph className="text-neutral-muted font-bold">
        We smoothly integrate AI solutions into your existing infrastructure
        with minimal disruption.
      </Paragraph>
      <div
        className={classNames(
          "border-neutral-surface/15 border",
          "relative flex items-center justify-between",
          "z-10 mt-6 h-full max-h-40 w-full px-14",
        )}
      >
        <div className="relative">
          <div className="border-neutral-surface/15 bg-near-black/60 rounded-md border p-1.5">
            <GlowOrbContainer className="size-12">
              <BigCircle
                className="absolute size-12"
                custom={{ clockwise: true, speed: 6 }}
              />
              <SmallCircle
                className="top-1/2 left-1/2 size-7 -translate-1/2"
                custom={{ clockwise: false, speed: 6 }}
              />
            </GlowOrbContainer>
          </div>
          <span className="text-neutral-surface absolute -bottom-4 w-full text-center text-[9px]">
            Our solution
          </span>
        </div>

        <div className="absolute -z-10 flex w-full md:max-w-65 max-w-50 flex-col gap-2.5">
          <Line />
          <Line />
          <Line />
        </div>

        <div className="relative">
          <div
            ref={emblaRef}
            className={classNames(
              "text-primary size-16.5 overflow-hidden p-0.75",
              "border-neutral-surface/15 bg-near-black/60 rounded-md border",
            )}
          >
            <div className="flex size-full flex-col ease-out">
              <div className="flex-[0_0_100%]">
                <GmailIcon size={60} />
              </div>
              <div className="flex-[0_0_100%]">
                <DiscordIcon size={60} />
              </div>
              <div className="flex-[0_0_100%]">
                <RadixIcon size={60} />
              </div>
              <div className="flex-[0_0_100%]">
                <OpenAIIcon size={60} />
              </div>
            </div>
          </div>
          <span className="text-neutral-surface absolute -bottom-4 w-full text-center text-[9px]">
            Your stack
          </span>
        </div>
      </div>
    </StepCardContainer>
  );
};

const Line = () => {
  return (
    <span
      id="tt"
      className="relative h-0.5 w-full overflow-hidden bg-[#141414]"
    >
      <motion.span
        variants={beamVariants}
        initial="initial"
        animate="animate"
        className="from-primary absolute block h-full w-5.5 rounded-xl bg-linear-to-l to-transparent"
      ></motion.span>
    </span>
  );
};

export default StepThreeIntegration;
