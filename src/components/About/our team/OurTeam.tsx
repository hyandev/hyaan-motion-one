import { cn } from "../../../lib/utils";
import { motion, useMotionValue } from "motion/react";
import { HeaderVariants, TeamCard } from "../../common/Variants";
import { Badge, Container, Paragraph, Title } from "../../common/Title";
import { teamData } from "./teamData";
import type React from "react";
import CursorFollowLink from "./CursorFollowLink";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const OurTeam = () => {
  const [isHover, setIsHover] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const onMousMove = (e: React.MouseEvent<HTMLElement>) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };
  const onMouseEnter = () => {
    setIsHover(true);
  };

  const onMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <section id="our-team" className="my-container mt-30">
      <div className="flex w-full flex-col">
        <Container
          as="header"
          initial="hidden"
          whileInView="visible"
          variants={HeaderVariants}
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto gap-2.5"
        >
          <Badge className="mx-auto">Out Team</Badge>
          <Title
            as="h2"
            className="mx-auto text-center text-2xl font-bold sm:text-[45px]"
          >
            Meet the Minds Behind Xtract
          </Title>
          <Paragraph className="text-neutral-muted mx-auto max-w-155 text-center text-[16.8px] font-bold">
            We bring together technology and strategy to create smarter
            automation solutions.
          </Paragraph>
        </Container>

        <div className="mt-15 flex flex-wrap justify-center gap-5">
          {teamData.map((data, index) => (
            <motion.article
              onMouseMove={onMousMove}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              key={data.id}
              variants={TeamCard}
              initial="initial"
              whileInView="animate"
              custom={index}
              viewport={{ once: true, amount: 0.5 }}
              className={cn(
                "bg-near-black w-full items-center",
                "border-y-neutral-surface/15 border-x-neutral-surface/10 rounded-lg border",
                "md:max-w-82",
              )}
            >
              <a
                href="https://www.linkedin.com/"
                className="flex cursor-none flex-col gap-2.5 px-4 py-4"
              >
                <div className="w-full md:max-w-72">
                  <img
                    width={288}
                    height={336}
                    src={data.image}
                    alt={`${data.name}, ${data.role}`}
                    className="aspect-6/7 w-full object-cover object-center max-md:max-h-80"
                  />
                </div>

                <div className="flex w-full items-center justify-between text-white">
                  <h3 className="text-xl font-semibold">{data.name}</h3>
                  <LinkedinIcon size={30} className="opacity-70" />
                </div>
                <span className="text-neutral-surface/80 w-full font-medium">
                  {data.role}
                </span>
              </a>
            </motion.article>
          ))}
        </div>

        <CursorFollowLink
          isHover={isHover}
          x={mouseX}
          y={mouseY}
          className="flex items-center gap-1.5 py-1 text-xs"
        >
          <span>View Lenkiden profile</span> <ArrowUpRight size={20} />
        </CursorFollowLink>
      </div>
    </section>
  );
};

interface IconProps {
  className?: string;
  size?: number;
  color?: string;
}

const LinkedinIcon: React.FC<IconProps> = ({
  className,
  size = 100,
  color = "currentColor",
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="22"
        y="22"
        width="56"
        height="56"
        rx="8"
        fill="none"
        stroke={color}
        strokeWidth="5"
      />
      <rect x="35" y="44" width="5" height="18" fill={color} />
      <circle cx="37.5" cy="38" r="2.8" fill={color} />
      <path
        d="M48 44 v18 M48 50 c0-5 3-7 7-7 s7 3 7 7 v11"
        stroke={color}
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default OurTeam;
