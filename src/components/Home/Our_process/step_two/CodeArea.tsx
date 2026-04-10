import classNames from "classnames";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";

const CodeArea = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      watchDrag: false,
      axis: "y",
      align: "start",
      containScroll: false,
    },
    [
      AutoScroll({
        speed: 0.3,
        stopOnInteraction: false,
        startDelay: 0,
      }),
    ],
  );

  return (
    <div
      ref={emblaRef}
      aria-hidden="true"
      className={classNames(
        "bg-near-black h-32 w-full rounded-lg px-1 text-xs",
        "touch-pan-y overflow-hidden will-change-transform",
        "mask-[linear-gradient(to_bottom,transparent_0%,transparent_5%,black_15%,black_100%)]",
      )}
    >
      <div
        className={classNames(
          "text-neutral-surface flex h-full flex-col",
          "transform-gpu will-change-transform backface-hidden",
        )}
      >
        {Array.from({ length: 2 }).map((_, index) => (
          <div key={index} className="flex-none py-2">
            <CodeBlock />
          </div>
        ))}
      </div>
    </div>
  );
};

const CodeBlock = () => {
  return (
    <>
      <div className="flex min-w-0 shrink-0 flex-col gap-1.5">
        <span className="block">
          <span className="text-purple-400">class</span> AutomationTrigger:
        </span>
        <span className="block pl-8">
          <span className="text-purple-400">def</span>{" "}
          <span className="text-purple-400">__init__</span>(self, threshold):
        </span>
        <span className="block pl-16">self.threshold = threshold</span>
        <span className="block pl-16">
          self.status = <span className="text-orange-300">"inactive"</span>
        </span>
      </div>
      <div className="flex min-w-0 shrink-0 flex-col gap-1.5">
        <span className="block pl-8">
          <span className="text-purple-400">def</span>{" "}
          <span className="text-purple-400">check_trigger</span>(self, value):
        </span>
        <span className="block pl-16">
          <span className="text-purple-400">if</span> value &gt; self.threshold:
        </span>
        <span className="block pl-24">
          self.status = <span className="text-orange-300">"active"</span>
        </span>
        <span className="block pl-24">
          <span className="text-purple-400">return</span>{" "}
          <span className="text-orange-300">"Automation triggered!"</span>
        </span>
        <span className="block pl-16">
          <span className="text-purple-400">else</span>:
        </span>
        <span className="block pl-24">
          <span className="text-purple-400">return</span>{" "}
          <span className="text-orange-300">"No action taken."</span>
        </span>
      </div>
      <div className="flex min-w-0 shrink-0 flex-col gap-1.5">
        <span className="block pl-8">
          <span className="text-purple-400">def</span>{" "}
          <span className="text-purple-400">get_status</span>(self):
        </span>
        <span className="block pl-16">
          <span className="text-purple-400">return</span> f
          <span className="text-orange-300">
            "Status: &#123;self.status&#125;"
          </span>
        </span>
      </div>
    </>
  );
};

export default CodeArea;
