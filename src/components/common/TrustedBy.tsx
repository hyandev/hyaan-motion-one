import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import classNames from "classnames";
import usePrefersReducedMotion from "../Home/trusted_by/usePrefersReducedMotion";
import clients from "../Home/trusted_by/ClientsData";
import { motion } from "motion/react";
import { TrustedEmbla, TrustedParagraph } from "./Variants";

const TrustedBy = () => {
  const prefersReduced = usePrefersReducedMotion();

  // If the user prefers reduced motion, we stop the automatic scroll but allow manual drag.
  // This ensures that users who dislike animations can still scroll to see the rest of the logos.
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", watchDrag: prefersReduced },

    prefersReduced
      ? []
      : [
          AutoScroll({
            speed: 0.7,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
            stopOnFocusIn: false,
            startDelay: 0,
          }),
        ],
  );

  return (
    <section
      id="trusted-by"
      className="trusted-by my-container w-full flex-col gap-8 py-10"
      role="region"
      aria-label="Trusted Clients"
    >
      <motion.p
        initial="initial"
        whileInView="animate"
        variants={TrustedParagraph}
        viewport={{ once: true }}
        className="text-center text-[0.88rem] font-semibold text-white"
      >
        Over 50 businesses trust us
      </motion.p>
      <motion.div
        variants={TrustedEmbla}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        ref={emblaRef}
        className="embla__viewport mx-auto overflow-hidden select-none md:w-6/10"
      >
        <div className="embla__container flex" role="list">
          {clients.map((client) => (
            <div
              key={client.id}
              className={classNames(
                "embla__slide",
                "flex items-center justify-center",
                "w-2/6 flex-none md:w-3/12",
              )}
              role="listitem"
            >
              <img
                src={client.image}
                alt={client.alt}
                loading="lazy"
                className={classNames(
                  "h-10.5 w-full max-w-25 p-2 opacity-80",
                  "duration-300 hover:scale-105 hover:opacity-100",
                )}
                width={100}
                height={42}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TrustedBy;
