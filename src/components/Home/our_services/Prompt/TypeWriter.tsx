import { useState, useEffect, useRef, type ComponentProps } from "react";
import { prompts } from "./data/prompts";

const TYPING_DELAY = 100;
const DELETING_DELAY = 50;
const PAUSE_BEFORE_DELETING = 2000;

const TypeWriter = (props: ComponentProps<"div">) => {
  const [displayText, setDisplayText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const fullText = prompts[currentTextIndex];

    if (!isDeleting) {
      if (currentCharIndex < fullText.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(fullText.slice(0, currentCharIndex + 1));
          setCurrentCharIndex((prev) => prev + 1);
        }, TYPING_DELAY);
      } else {
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
        }, PAUSE_BEFORE_DELETING);
      }
    } else {
      if (currentCharIndex > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
          setCurrentCharIndex((prev) => prev - 1);
        }, DELETING_DELAY);
      } else {
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % prompts.length);
        }, 0);
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentCharIndex, currentTextIndex, isDeleting]);

  return (
    <div {...props}>
      <span role="status" aria-atomic="true">
        {displayText}
      </span>

      <span className="typewriter-caret" aria-hidden="true">
        |
      </span>
    </div>
  );
};

export default TypeWriter;
