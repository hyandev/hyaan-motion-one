import classNames from "classnames";
import TypeWriter from "./TypeWriter";
import FadeText from "./FadeText";
import usePrefersReducedMotion from "../../trusted_by/usePrefersReducedMotion";

const PromptInput = () => {
  const prefersReduced = usePrefersReducedMotion();

  return (
    <div
      role="figure"
      aria-label="Command Input Simulation"
      aria-roledescription="Demo example"
      className={classNames(
        "border-neutral-surface/25 rounded-sm border",
        "mt-5 p-1.5",
        "opacity-50",
      )}
    >
      <div className="flex justify-between text-[12px]">
        {prefersReduced ? (
          <FadeText />
        ) : (
          <TypeWriter
            className="text-neutral-surface font-mono"
            aria-live="polite"
          />
        )}

        <div>
          <svg
            aria-hidden="true"
            tabIndex={-1}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="text-primary border-neutral-surface/35 size-4 rounded-xs border p-px"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
        </div>
      </div>
      <div
        className={classNames(
          "text-neutral-surface w-fit text-[10px]",
          "border-neutral-surface/35 rounded-full border",
          "mt-3 px-1.5 py-px",
        )}
      >
        <i tabIndex={-1} className="fa-solid fa-plus text-primary"></i>
        <span aria-hidden="true" className="ml-1">
          Add document
        </span>
      </div>
    </div>
  );
};

export default PromptInput;
