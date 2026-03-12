"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export interface MenuItem {
  href: string;
  label: string;
  color: string;
}

interface TerminalMenuProps {
  items: MenuItem[];
}

export function TerminalMenu({ items }: TerminalMenuProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % items.length);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + items.length) % items.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        window.open(items[selectedIndex].href, "_blank");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [items, selectedIndex]);

  const isActive = (index: number) => hoveredIndex !== null ? hoveredIndex === index : selectedIndex === index;

  return (
    <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 sm:justify-start">
      {items.map((item, index) => (
        <Link
          key={item.label}
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="block py-2"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <span
            className="font-bold transition-all duration-150 text-xs sm:text-base md:text-lg"
            style={{
              color: isActive(index) ? item.color : "var(--terminal-dim)",
              textShadow: isActive(index)
                ? `0 0 2px ${item.color}`
                : "none",
            }}
          >
            {">"} {item.label}
          </span>
        </Link>
      ))}
    </div>
  );
}
