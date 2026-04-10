import { cn } from "../../../lib/utils";
import { Badge, Container, Paragraph, Title } from "../../common/Title";
import {
  CardNegative,
  CardPositive,
  HeaderVariants,
} from "../../common/Variants";
import { motion } from "motion/react";
import { comparisonData } from "./comparisonData";

const WhyUs = () => {
  return (
    <section id="our-values" className="my-container mt-30">
      <div className="flex w-full flex-col">
        <Container
          as="header"
          initial="hidden"
          whileInView="visible"
          variants={HeaderVariants}
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto gap-2.5"
        >
          <Badge className="mx-auto">Why us</Badge>
          <Title
            as="h2"
            className="mx-auto text-center text-2xl font-bold sm:text-[45px]"
          >
            What makes us stand out in the industry
          </Title>
          <Paragraph className="text-neutral-muted mx-auto max-w-155 text-center text-[16.8px] font-bold">
            Discover how our innovative strategies, data-driven approach, and
            commitment to results set us apart from the competition
          </Paragraph>
        </Container>
        <div className={cn("mt-15 flex flex-wrap justify-center gap-5")}>
          {comparisonData.map((data) => {
            const isPositive = data.status === "positive";
            return (
              <motion.article
                key={data.id}
                variants={isPositive ? CardPositive : CardNegative}
                initial="initial"
                whileInView="animate"
                custom={0}
                viewport={{ once: true, amount: 0.5 }}
                className={cn(
                  "flex w-full flex-col",
                  "border-y-neutral-surface/15 border-x-neutral-surface/10 rounded-lg border",
                  "gap-3.5 px-6 py-4 lg:max-w-105",
                  isPositive &&
                    "bg-[radial-gradient(50%_50%_at_50%_0%,#3b215c,transparent)]",
                )}
              >
                <h2
                  className={cn(
                    "text-neutral-surface text-xl font-semibold",
                    !isPositive && "opacity-75",
                  )}
                >
                  {data.title}
                </h2>

                <ul
                  className={cn(
                    "text-neutral-surface flex flex-col gap-2",
                    !isPositive && "opacity-80",
                  )}
                >
                  {data.features.map((feature, index) => (
                    <li
                      key={`${feature}-${index}`}
                      className="flex items-center gap-2.5"
                    >
                      <data.icon size={25} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
