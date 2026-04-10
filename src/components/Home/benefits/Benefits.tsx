import classNames from "classnames";
import { Badge, Container, Paragraph, Title } from "../../common/Title";
import { HeaderVariants } from "../../common/Variants";
import { AI_BENEFITS } from "./benefitsData";
import { motion, type Variants } from "motion/react";

const cardVariants: Variants = {
  initial: { opacity: 0, y: 25 },
  animate: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: custom * 0.1,
      ease: "linear",
    },
  }),
};

const Benefits = () => {
  return (
    <section
      id="benefits"
      className="my-container mt-30 flex flex-col gap-15 md:mt-60"
    >
      <Container
        as="header"
        initial="hidden"
        whileInView="visible"
        variants={HeaderVariants}
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto gap-2.5"
      >
        <Badge className="mx-auto">Benefits</Badge>
        <Title
          as="h2"
          className="mx-auto max-w-170 text-center text-2xl font-bold sm:text-[45px]"
        >
          The Key Benefits of AI for Your Business Growth
        </Title>
        <Paragraph className="text-neutral-muted mx-auto max-w-145 text-center text-[16.8px] font-bold">
          Discover how AI automation enhances efficiency, reduces costs, and
          drives business growth with smarter, faster processes.
        </Paragraph>
      </Container>
      <div
        data-testid="cards-container"
        className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-5"
      >
        {AI_BENEFITS.map((item, index) => (
          <motion.article
            key={item.id}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
            className={classNames(
              "border-x-neutral-surface/15 border-y-neutral-surface/7 border",
              "flex flex-col gap-3 rounded-md p-4",
              "bg-regular bg-no-repeat",
              "will-change-transform",
            )}
          >
            <item.Icon className="text-neutral-surface" />
            <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
            <p className="text-neutral-muted font-semibold">
              {item.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
