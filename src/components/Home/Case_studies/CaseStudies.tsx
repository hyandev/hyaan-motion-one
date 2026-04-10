import useEmblaCarousel from "embla-carousel-react";
import { Badge, Container, Paragraph, Title } from "../../common/Title";
import { HeaderVariants } from "../../common/Variants";

import slides from "./slides";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback } from "react";
import { motion } from "motion/react";
import classNames from "classnames";

const CaseStudies = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    breakpoints: {
      "(max-width: 767px)": { active: false },
    },
  });

  const goToPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const goToNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      id="case-studies"
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
        <Badge className="mx-auto">Case Studies</Badge>
        <Title
          as="h2"
          className="mx-auto max-w-170 text-center text-2xl font-bold sm:text-[45px]"
        >
          See How Smart AI Automation Transforms Businesses
        </Title>
        <Paragraph className="text-neutral-muted mx-auto text-center font-bold sm:text-[16.8px]">
          See how AI automation streamlines operations, boosts and drives
          growth.
        </Paragraph>
      </Container>

      {/* Slides */}

      <motion.div>
        <div
          ref={emblaRef}
          className={classNames(
            "embla mx-auto w-full will-change-transform min-[1100px]:w-8/10 md:overflow-hidden",
          )}
        >
          <div
            className={classNames(
              "viewport w-full md:transform-gpu md:will-change-transform",
              "flex max-md:flex-col max-md:gap-8",
            )}
          >
            {slides.map((slide) => (
              <motion.article
                key={slide.id}
                variants={HeaderVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className={classNames(
                  "mx-auto grid w-full min-w-0 gap-13.75 md:flex-[0_0_100%]",
                  "grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))]", // ← هذا التغيير
                  "md:cursor-grab md:active:cursor-grabbing",
                  "max-md:border-neutral-surface/15 max-md:rounded-xl max-md:border max-md:p-5",
                )}
              >
                <div className="max-h-125 w-full overflow-hidden rounded-2xl md:max-w-112.5 md:mask-[linear-gradient(to_right,transparent,black_25%)]">
                  <img
                    src={slide.image}
                    loading="lazy"
                    className="aspect-16/13 h-full w-full object-cover object-center md:aspect-square"
                    alt={slide.imageAlt}
                    width={450}
                    height={500}
                  />
                </div>
                <div className="flex flex-col justify-center gap-5">
                  <div>
                    <img
                      src={slide.logo}
                      alt={slide.logoAlt}
                      className="w-35"
                      width={140}
                      height={40}
                    />
                  </div>
                  <h3 className="text-[22.7px] font-semibold text-white">
                    "{slide.headline}"
                  </h3>
                  <p className="text-neutral-muted text-[15px] font-semibold">
                    {slide.description}
                  </p>
                  <div>
                    <span className="text-neutral-muted text-[18px] font-semibold">
                      Impact:
                    </span>
                    <div className="mt-2.5 flex flex-col gap-2">
                      {slide.impact.map((item, index) => (
                        <span
                          key={`${slide.id}-${index}`}
                          className="text-neutral-surface text-[16px] font-semibold"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
        <div className="text-neutral-surface/80 mx-auto mt-8 flex w-fit items-center gap-3.5 max-md:hidden">
          <button
            className="cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
            onClick={goToPrev}
            aria-label="Previous slide"
            tabIndex={0}
            disabled={!emblaApi?.canScrollPrev()}
          >
            <ArrowLeft strokeWidth={1.25} />
          </button>

          <span className="text-[13px] font-semibold">
            Drag or swipe to explore
          </span>

          <button
            className="cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
            onClick={goToNext}
            aria-label="Next slide"
            tabIndex={0}
            disabled={!emblaApi?.canScrollNext()}
          >
            <ArrowRight strokeWidth={1.25} />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default CaseStudies;
