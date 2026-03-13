"use client";

import { useState, useEffect, useCallback } from "react";

interface TerminalBioProps {
  text: string;
  onComplete?: () => void;
}

function getTypingDelay(char: string): number {
  const baseDelay = 15 + Math.random() * 20;

  if (/[.!?]/.test(char)) {
    return baseDelay + 100 + Math.random() * 80;
  }

  if (/[,;:]/.test(char)) {
    return baseDelay + 60 + Math.random() * 40;
  }

  if (char === " ") {
    return baseDelay + 15 + Math.random() * 20;
  }

  return baseDelay;
}

export function TerminalBio({ text, onComplete }: TerminalBioProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  const typeNextChar = useCallback(() => {
    if (textIndex < text.length) {
      const delay = getTypingDelay(text[textIndex]);
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, textIndex + 1));
        setTextIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [textIndex, text, onComplete]);

  useEffect(() => {
    return typeNextChar();
  }, [typeNextChar]);

  return (
    <pre
      className="whitespace-pre-wrap text-xs sm:text-base md:text-lg"
      style={{
        color: "var(--terminal-primary)",
        textShadow: "0 0 5px var(--terminal-text-shadow)",
        minWidth: "fit-content"
      }}
    >
      {displayedText}
      <span className="animate-cursor-blink">▋</span>
    </pre>
  );
}
