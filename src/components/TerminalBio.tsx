"use client";

import { useState, useEffect } from "react";

interface TerminalBioProps {
  text: string;
  onComplete?: () => void;
}

export function TerminalBio({ text, onComplete }: TerminalBioProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    if (textIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, textIndex + 1));
        setTextIndex((prev) => prev + 1);
      }, 25);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [textIndex, text, onComplete]);

  return (
    <pre
      className="whitespace-pre-wrap text-xs sm:text-base md:text-lg"
      style={{
        color: "var(--terminal-primary)",
        textShadow: "0 0 5px var(--terminal-text-shadow)"
      }}
    >
      {displayedText}
      <span className="animate-cursor-blink">▋</span>
    </pre>
  );
}
