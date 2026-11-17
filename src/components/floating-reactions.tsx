"use client";

import confetti from "canvas-confetti";
import { useState } from "react";

export function FloatingReactions() {
  const [clicked, setClicked] = useState<string | null>(null);

  const emojis = [
    { emoji: "⚡", label: "Supercharged", sound: "pow" },
    { emoji: "☕", label: "Java Coder", sound: "sip" },
    { emoji: "🔥", label: "Shipped", sound: "fire" },
    { emoji: "🚀", label: "To the Moon", sound: "launch" },
    { emoji: "🤖", label: "AI Powered", sound: "beep" },
  ];

  const triggerConfetti = (e: React.MouseEvent<HTMLButtonElement>, emoji: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    setClicked(emoji);
    setTimeout(() => setClicked(null), 300);

    confetti({
      origin: { x, y },
      particleCount: 28,
      spread: 60,
      ticks: 120,
      gravity: 1.2,
      scalar: 1.1,
      shapes: ["circle", "square"],
      colors: ["#fbbf24", "#34d399", "#60a5fa", "#f43f5e", "#a855f7"],
    });
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-2.5 my-6">
      <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mr-2 flex items-center gap-1">
        <span>Press for confetti:</span>
      </span>
      {emojis.map((item) => (
        <button
          key={item.emoji}
          onClick={(e) => triggerConfetti(e, item.emoji)}
          className={`neo-btn px-3 py-1.5 rounded-xl bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 font-mono text-xs font-bold inline-flex items-center gap-1.5 transition-transform duration-150 ${
            clicked === item.emoji ? "scale-125 rotate-6 bg-amber-200 dark:bg-amber-900" : "hover:scale-105"
          }`}
          title={item.label}
        >
          <span className="text-base">{item.emoji}</span>
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
}

