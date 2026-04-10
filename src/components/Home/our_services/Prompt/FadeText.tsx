import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import { prompts } from "./data/prompts";

const FadeText = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      duration: 35,
      watchDrag: false,
    },
    [
      Fade(),
      Autoplay({
        delay: 3200,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        playOnInit: true,
      }),
    ],
  );
  return (
    <div ref={emblaRef} className="w-full overflow-hidden">
      <div className="flex">
        {prompts.map((prompt) => (
          <div key={prompt} className="flex-[0_0_100%]">
            <p
              aria-live="polite"
              aria-atomic="true"
              className="text-neutral-surface text-[12px]"
            >
              {prompt}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FadeText;
