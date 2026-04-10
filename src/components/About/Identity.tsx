import { cn } from "../../lib/utils";
import { Badge, Container, Paragraph, Title } from "../common/Title";
import { HeaderVariants, planVariants } from "../common/Variants";
import { stats } from "./stats";
import { motion } from "motion/react";

const Identity = () => {
  return (
    <section id="who-we-are" className="my-container">
      <div className="flex w-full flex-col justify-center gap-15">
        <Container
          as="header"
          initial="hidden"
          whileInView="visible"
          variants={HeaderVariants}
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto gap-2.5"
        >
          <Badge className="mx-auto">Who We Are</Badge>
          <Title as="h2" className="mx-auto text-2xl font-bold sm:text-[45px]">
            Who We Are
          </Title>
          <Paragraph className="text-neutral-muted mx-auto max-w-155 text-center text-[16.8px] font-bold">
            Xtract is a team of innovators dedicated to making AI automation
            simple and effective. We help businesses streamline workflows, boost
            efficiency, and scale with smart, AI-driven solutions.
          </Paragraph>
        </Container>
        <div className="flex flex-wrap justify-center gap-5">
          {stats.map((state) => (
            <motion.article
              key={state.id}
              variants={planVariants}
              initial="initial"
              whileInView="animate"
              custom={0}
              viewport={{ once: true, amount: 0.5 }}
              className={cn(
                "flex w-full flex-col lg:max-w-80",
                "border-neutral-surface/15 rounded-lg border",
                "bg-regular-left gap-3.5 px-6 py-4",
              )}
            >
              <div className="flex items-center gap-3 text-white">
                <state.icon size={25} />
                <span className="text-xl font-semibold">
                  {state.value} {state.label}
                </span>
              </div>
              <p className="text-neutral-muted font-semibold">
                {state.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Identity;
