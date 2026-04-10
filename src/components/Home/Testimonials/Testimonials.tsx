import { Star } from "lucide-react";
import { Badge, Container, Paragraph, Title } from "../../common/Title";
import { HeaderVariants, planVariants } from "../../common/Variants";
import { testimonials } from "./testimonialsData";
import classNames from "classnames";
import { motion } from "motion/react";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
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
        <Badge className="mx-auto">Testimonials</Badge>
        <Title
          as="h2"
          className="mx-auto max-w-170 text-center text-2xl font-bold sm:text-[45px]"
        >
          Why Businesses Love Our AI Solutions
        </Title>
        <Paragraph className="text-neutral-muted mx-auto text-center text-[16.8px] font-bold">
          Real businesses, real results with AI automation.
        </Paragraph>
      </Container>

      <div className="mx-auto grid grid-cols-1 gap-6 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <motion.article
            key={testimonial.id}
            variants={planVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
            viewport={{ once: true, amount: 0.5 }}
            className={classNames(
              "flex max-w-123 min-w-75 flex-col",
              "border-neutral-surface/15 rounded-lg border",
              "bg-regular-left gap-3.5 px-6 py-4",
            )}
          >
            <div
              className="text-neutral-surface flex gap-1.5"
              role="group"
              aria-label={`Rated ${testimonial.stars} out of 5 stars`}
            >
              {Array.from({ length: testimonial.stars }).map((_, index) => (
                <Star
                  data-testid="lucide-star"
                  key={index}
                  size={20}
                  fill="currentColor"
                />
              ))}
            </div>

            <p className="text-neutral-muted font-semibold">
              {testimonial.quote}
            </p>

            <div className="flex items-center gap-3.5">
              <div className="size-12">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s profile`}
                  loading="lazy"
                  className="size-full rounded-full object-cover object-center"
                  width={48}
                  height={48}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-neutral-surface text-[14px] font-semibold">
                  {testimonial.name}
                </span>
                <span className="text-neutral-muted text-xs font-semibold">
                  {testimonial.role}
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
