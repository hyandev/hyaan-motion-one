import { lazy, useCallback, useEffect, useRef, useState } from "react";
import HeroContainer from "./HeroContainer";
import { motion, type Variants } from "motion/react";
import classNames from "classnames";
const Canvas = lazy(() => import("./canvas/Canvas"));

import { BigCircle, GlowOrbContainer, SmallCircle } from "../../common/GlowOrb";

const glowOffset = 0;
const PARTICLE_COUNT = window.innerWidth > 650 ? 60 : 25;

export type OrbPosition = {
  x: null | number;
  y: null | number;
  width: null | number;
  height: null | number;
};

const canvasAppVariants: Variants = {
  init: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1,
    },
  },
};

const Hero = () => {
  const [element, setElement] = useState<OrbPosition>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const [heroHeight, setHeroHeight] = useState(0);

  useEffect(() => {
    if (!heroRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const height = entries[0].contentRect.height;
      setHeroHeight((prev) => (Math.abs(prev - height) > 1 ? height : prev));
    });

    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const handleOrbMount = useCallback((position: OrbPosition) => {
    setElement((prev) => {
      if (
        prev.x === position.x &&
        prev.y === position.y &&
        prev.width === position.width &&
        prev.height === position.height
      ) {
        return prev;
      }
      return position;
    });
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="hero relative h-[65vh] overflow-clip md:h-screen"
    >
      <motion.div
        variants={canvasAppVariants}
        initial="init"
        animate="animate"
        role="img"
        aria-label="A visual display of white particles moving and fading towards the center of the screen."
      >
        {element.x !== null &&
          element.y !== null &&
          element.width !== null &&
          element.height !== null && (
            <Canvas
              x={element.x - glowOffset}
              y={element.y - glowOffset}
              width={element.width}
              height={element.height}
              particles={PARTICLE_COUNT}
              containerHeight={heroHeight}
            />
          )}
      </motion.div>
      <GlowOrbContainer
        className={classNames(
          "absolute top-1/2 left-1/2 m-auto -translate-1/2",
          "flex size-120 items-center justify-center",
        )}
        onMount={handleOrbMount}
      >
        <BigCircle
          className="size-100.5 gap-2.5 blur-[10px]"
          custom={{ clockwise: false, speed: 10 }}
        />
        <SmallCircle
          className="size-62.5 gap-2.5 blur-[15px]"
          custom={{ clockwise: true, speed: 10 }}
        />
      </GlowOrbContainer>
      <div>
        <HeroContainer />
      </div>
    </section>
  );
};

export default Hero;
