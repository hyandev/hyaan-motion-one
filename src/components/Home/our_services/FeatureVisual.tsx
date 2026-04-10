import classNames from "classnames";
import activities from "./Prompt/data/Activities";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import usePrefersReducedMotion from "../trusted_by/usePrefersReducedMotion";
import FeatureCardContainer from "../../common/FeatureCardContainer";

// Activities are duplicated to create a seamless infinite scroll illusion —
// Embla loops back to the start, so doubling the list prevents a visible gap/jump.
const duplicatedActivities = [...activities, ...activities];

const FeatureVisual = () => {
  const prefersReduced = usePrefersReducedMotion();

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      watchDrag: false,
      axis: "y",
      containScroll: false,
    },
    [
      AutoScroll({
        speed: 0.3,
        stopOnInteraction: false,
        direction: "forward",
      }),
    ],
  );

  return (
    <FeatureCardContainer>
      <header className="border-neutral-surface/5 mb-2 flex items-center gap-2 rounded-sm border bg-[#0d0d0d] p-0.5 text-[12px]">
        <span className="text-neutral-surface border-neutral-surface/10 border bg-[#191919] p-px">
          All Tasks
        </span>
        <span className="font-medium text-white">Waiting for approval</span>
      </header>

      <div
        ref={emblaRef}
        className={classNames(
          "h-58 w-full touch-pan-y overflow-hidden min-[900px]:w-80",
          !prefersReduced &&
            "mask-[linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]",
        )}
      >
        <ul className="flex h-full flex-col gap-1.5">
          {duplicatedActivities.map((activity, i) => (
            <li
              key={`${activity.id}-${i}`}
              className={classNames(
                "flex flex-none shrink-0 items-center gap-2.5 will-change-transform",
                "border-neutral-surface/20 rounded-md border px-1.5 py-1 opacity-80",
              )}
            >
              <activity.icon
                size={20}
                color="#a4a4a4"
                data-testid="activity-icon"
              />
              <div className="grid">
                <span className="text-neutral-surface text-[12px]">
                  {activity.title}
                </span>
                <span className="text-neutral-muted text-[8.5px] font-semibold">
                  {activity.subtitle}
                </span>
              </div>
              <activity.statusIcon
                size={20}
                color="#814ac8"
                data-testid="status-icon"
                role="img"
                aria-label={activity.status}
                className={classNames(activity.statusIcon, "ml-auto")}
              ></activity.statusIcon>
            </li>
          ))}
        </ul>
      </div>
    </FeatureCardContainer>
  );
};

export default FeatureVisual;
