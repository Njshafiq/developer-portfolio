"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { useState } from "react";
import { FileText } from "lucide-react";

export function FloatingPillNav() {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About", href: "#about" },
    { id: "dream", label: "Dream", href: "#dream" },
    { id: "work", label: "Work", href: "#work" },
    { id: "notes", label: "Notes", href: "#notes" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      <nav className="hand-nav bg-white dark:bg-stone-900 px-6 py-2.5 flex items-center gap-6 text-sm font-black text-stone-900 dark:text-stone-100">
        {tabs.map((tab) => (
          <a
            key={tab.id}
            href={tab.href}
            onClick={() => setActiveTab(tab.id)}
            className={`transition-colors relative py-1 ${
              activeTab === tab.id
                ? "text-orange-600 dark:text-orange-400 wavy-active font-extrabold"
                : "text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white"
            }`}
          >
            {tab.label}
          </a>
        ))}
        <div className="flex items-center gap-2 pl-2 border-l-2 border-stone-300 dark:border-stone-700">
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}

