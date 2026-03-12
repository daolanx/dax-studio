"use client";

import { useState } from "react";
import { TerminalBio } from "@/components/TerminalBio";
import { TerminalMenu, type MenuItem } from "@/components/TerminalMenu";

const bioText = `LCARS ACCESS TERMINAL 47.A
============================
> AUTHORIZATION: GRANTED
> IDENTITY: DAX
> DESIGNATION: INDEPENDENT FRONTEND DEVELOPER
> CORE DIRECTIVE: PROGRAMMING FOR INTRINSIC JOY & MEANING
> STATUS: SYSTEMS OPERATIONAL
> ---
> WELCOME ABOARD, COMMANDER.
> PLEASE SELECT YOUR DESTINATION.
 `;

const menuItems: MenuItem[] = [

  { href: "https://www.daolanx.me", label: "BLOG", color: "#3399FF" },
  

  { href: "https://work.daolanx.me", label: "WORK", color: "#9966FF" },
  

  { href: "https://github.com/daolanx", label: "GITHUB", color: "#FF9900" },
  

  { href: "https://twitter.com/daolanx", label: "TWITTER", color: "#CC6699" },
  
  { href: "mailto:daolanx.dev@gmail.com", label: "EMAIL", color: "#F7A31C" },
];

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8"
      style={{ backgroundColor: "var(--terminal-bg)" }}>
      {/* Scanline effect */}
      <div className="scanline opacity-30" />
      <div className="font-mono text-base sm:text-lg w-full max-w-2xl">
        {/* Bio Text with typing effect */}
        <TerminalBio text={bioText} onComplete={() => setShowMenu(true)} />

        {/* Menu */}
        {showMenu && (
          <TerminalMenu items={menuItems} />
        )}
      </div>
    </div>
  );
}
