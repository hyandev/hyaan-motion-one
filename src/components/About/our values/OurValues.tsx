import { cn } from "../../../lib/utils";
import { Badge, Container, Paragraph, Title } from "../../common/Title";
import { HeaderVariants, planVariants } from "../../common/Variants";
import { stats as data } from "./ourValuesData";
import { motion } from "motion/react";

const OurValues = () => {
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
          <Badge className="mx-auto">Our Values</Badge>
          <Title as="h2" className="mx-auto text-2xl font-bold sm:text-[45px]">
            The Values Behind Xtract
          </Title>
          <Paragraph className="text-neutral-muted mx-auto max-w-155 text-center text-[16.8px] font-bold">
            Our values shape everything we do at Xtract. From innovation to
            integrity, we’re committed to building AI solutions that empower
            businesses and drive real impact.
          </Paragraph>
        </Container>
        <div
          className={cn(
            "mt-15 flex flex-wrap justify-center gap-5",
            "bg-[radial-gradient(50%_50%_at_50%_50%,#201332,transparent)]",
          )}
        >
          {data.map((item) => (
            <motion.article
              key={item.id}
              variants={planVariants}
              initial="initial"
              whileInView="animate"
              custom={0}
              viewport={{ once: true, amount: 0.5 }}
              className={cn(
                "flex w-full flex-col bg-[#0b0b0c]",
                "border-neutral-surface/15 rounded-lg border",
                "gap-3.5 px-6 py-4 lg:max-w-110",
              )}
            >
              <div className="flex items-center gap-3 text-white">
                <item.icon size={30} />
                <h3 className="text-xl font-semibold">{item.label}</h3>
              </div>
              <p className="text-neutral-muted text-[14px] font-bold">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
