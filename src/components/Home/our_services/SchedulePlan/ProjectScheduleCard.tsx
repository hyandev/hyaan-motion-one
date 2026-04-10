import { Bot, CalendarDays, LoaderCircle, Settings2 } from "lucide-react";
import FeatureCardContainer from "../../../common/FeatureCardContainer";
import Tasks from "./Tasks";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import classNames from "classnames";

const days = [
  { label: "Mo" },
  { label: "Tu" },
  { label: "We" },
  { label: "Th" },
  { label: "Fr" },
  { label: "Sa" },
  { label: "Su" },
];

const ProjectScheduleCard = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const time = setTimeout(() => {
      setIndex((p) => {
        const nextIndex = p + 3;
        return nextIndex >= days.length ? 0 : nextIndex;
      });
    }, 3000);

    return () => {
      clearTimeout(time);
    };
  }, [index]);
  return (
    <FeatureCardContainer className="w-full">
      <div aria-hidden={true} className="mb-2.5 flex flex-col text-white">
        <span className="text-xs">Hey Hyan!</span>
        <span className="text-xss">Here is your Custom project & schedule</span>
      </div>
      <div className="border-neutral-surface/10 rounded-xl border bg-[#0d0d0d] p-2.5">
        <div className="mb-2.5 flex items-center text-white">
          <Settings2 size={16} />
          <span className="ml-2 text-xs">On going project :</span>
        </div>
        <div className="bg-rich-black mb-2.5 flex items-center gap-1.5 p-1">
          <Bot
            size={28}
            className="text-neutral-surface rounded-sm bg-[#212121] p-1"
          />
          <div className="flex flex-col">
            <span className="text-neutral-surface text-xs">
              Customer Support Chatbot
            </span>
            <span className="text-neutral-muted text-xss">90% Finished</span>
          </div>
          <LoaderCircle size={20} className="ml-auto -rotate-50 text-white" />
        </div>
        <div className="border-neutral-surface/5 mb-2.5 rounded-sm border bg-[#131313] p-1.25">
          <div className="flex items-center gap-1.5">
            <CalendarDays size={16} className="text-white" />
            <span className="text-xs text-white">Schedule</span>
          </div>
          <div className="mt-2 flex items-center gap-1">
            {days.map((day, dayIndex) => {
              const isActive = index === dayIndex;

              return (
                <motion.span
                  key={day.label}
                  animate={{
                    background: isActive ? "#814ac8" : "transparent",
                  }}
                  className={classNames(
                    "text-xss text-neutral-surface rounded-md p-0.75",
                    "flex items-center justify-center",
                    "transition-colors duration-300",
                  )}
                >
                  {day.label}
                </motion.span>
              );
            })}
          </div>
        </div>
        <Tasks />
      </div>
    </FeatureCardContainer>
  );
};

export default ProjectScheduleCard;
