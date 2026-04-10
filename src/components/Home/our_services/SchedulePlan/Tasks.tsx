import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";
import { EllipsisVertical, Video } from "lucide-react";
import {
  PRIMARY_SCHEDULE,
  SECONDARY_SCHEDULE,
  type ScheduleItem,
} from "./tasks-data";

type TaskRowType = {
  item: ScheduleItem;
  iconOverride?: ReactNode;
};
// Tasks.jsx
export const TaskRow = ({ item, iconOverride }: TaskRowType) => (
  <div className="flex w-full items-center gap-1.5 text-neutral-300">
    <div className="rounded-sm bg-[#171717] p-1.25">
      {iconOverride || item.icon}
    </div>
    <div className="text-xss text-neutral-surface flex flex-col gap-y-px">
      <span>{item.title}</span>
      <span className="">
        {item.startTime} to {item.endTime}
      </span>
    </div>
    <EllipsisVertical size={16} className="text-neutral-surface ml-auto" />
  </div>
);

const Tasks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const primaryItem = PRIMARY_SCHEDULE[currentIndex];
  const secondaryItem = SECONDARY_SCHEDULE[currentIndex];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % PRIMARY_SCHEDULE.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="relative min-h-20 w-full">
      {/* Secondary Task Layer */}
      <AnimatePresence mode="popLayout">
        {!secondaryItem.isEmpty && (
          <motion.div
            key={secondaryItem.id}
            className="absolute z-10 w-full"
            initial={secondaryItem.animate.init}
            whileInView={secondaryItem.animate.anime}
          >
            <TaskRow
              item={secondaryItem}
              iconOverride={
                <Video size={16} className="text-neutral-surface ml-auto" />
              }
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Primary Task Layer */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={primaryItem.id}
          className="relative top-10 z-20 w-full"
          initial={primaryItem.animate.init}
          whileInView={primaryItem.animate.anime}
          exit={primaryItem.animate.exit}
        >
          {primaryItem.isEmpty ? (
            <div className="text-neutral-surface text-xs">
              {primaryItem.message}
            </div>
          ) : (
            <TaskRow item={primaryItem} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Tasks;
