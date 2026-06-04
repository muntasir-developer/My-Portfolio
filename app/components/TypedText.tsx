"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

type Props = {
  text: string;
  /** ms before typing begins */
  startDelay?: number;
  /** ms per character */
  speed?: number;
  className?: string;
};

/**
 * Types `text` character by character with a blinking caret.
 * Full text is always present for screen readers; the animated copy
 * is aria-hidden. Under reduced motion the full text shows at once.
 */
export default function TypedText({
  text,
  startDelay = 400,
  speed = 38,
  className,
}: Props) {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (reduce) {
      setCount(text.length);
      return;
    }
    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, startDelay, speed, reduce]);

  const done = count >= text.length;

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.slice(0, count)}
        <span
          className={`ml-0.5 inline-block w-[2px] -translate-y-[2px] self-stretch bg-accent align-middle ${
            done ? "animate-blink" : ""
          }`}
          style={{ height: "1em" }}
        />
      </span>
    </span>
  );
}
