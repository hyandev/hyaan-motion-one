import classNames from "classnames";
import FeatureCardContainer from "../../common/FeatureCardContainer";
import { Badge } from "../../common/Title";
import UserInfo from "./Userinfo";
import users from "./Prompt/data/users";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import usePrefersReducedMotion from "../trusted_by/usePrefersReducedMotion";
import Stepper from "./Stepper";
import { LoaderCircle } from "lucide-react";

const tags = ["LinkedIn", "IT services", "Founders"];

const EmailSendingPreview = () => {
  const prefersReduced = usePrefersReducedMotion();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      axis: "y",
      containScroll: false,
      duration: 40,
      watchDrag: prefersReduced,
    },
    prefersReduced
      ? []
      : [
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
            playOnInit: true,
          }),
        ],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <FeatureCardContainer className="w-full">
      <div aria-label="Demo showing an email being sent to a contact list">
        <header
          className={classNames(
            "flex items-center justify-between",
            "border-neutral-surface/15 border",
            "bg-[#0d0d0d] p-1.5",
          )}
        >
          <span className="text-neutral-surface text-xs">E-mail Sending..</span>
          <LoaderCircle color="#814ac8" size={20} className="spinner" />
        </header>
        <div className="mt-1.5 space-x-1">
          {tags.map((tag) => (
            <Badge
              key={tag}
              className="text-neutral-surface rounded-full text-[9px]"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <div
          ref={emblaRef}
          className={classNames(
            "mt-2.5 flex h-40 flex-col overflow-hidden",
            "mask-[linear-gradient(to_bottom,black_98%,transparent)]",
          )}
        >
          <div className="flex h-full flex-col gap-2.5">
            {users.map((user, index) => {
              const isActive = selectedIndex === index;

              return (
                <UserInfo
                  key={user.id}
                  className={classNames({ "opacity-40": !isActive })}
                  name={user.name}
                  role={user.role}
                  email={user.email}
                  company={user.company}
                  verified={user.verified}
                />
              );
            })}
          </div>
        </div>
        <Stepper />
      </div>
    </FeatureCardContainer>
  );
};

export default EmailSendingPreview;
