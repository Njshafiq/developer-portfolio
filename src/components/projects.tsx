"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

interface FunProjectCardProps {
  url: string;
  title: string;
  tagline: string;
  handwrittenNote?: string;
  bullets: string[];
  liveUrl?: string;
  githubUrl?: string;
  underTheHood: string[];
}

function FunProjectCard({
  url,
  title,
  tagline,
  handwrittenNote,
  bullets,
  liveUrl,
  githubUrl,
  underTheHood,
}: FunProjectCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="hand-card bg-white dark:bg-stone-900 overflow-hidden flex flex-col justify-between">
      {/* Browser Window Header with Traffic Light Dots */}
      <div>
        <div className="px-4 py-2.5 bg-stone-100 dark:bg-stone-800 border-b-2 border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400 border border-stone-800" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-stone-800" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 border border-stone-800" />
          </div>
          <span className="font-mono text-[11px] font-bold text-stone-500 bg-white dark:bg-stone-900 px-3 py-0.5 rounded-full border border-stone-300 dark:border-stone-700">
            {url}
          </span>
          <div className="w-8" />
        </div>

        {/* Card Content */}
        <div className="p-6">
          <h3 className="text-2xl font-black text-stone-950 dark:text-stone-50 mb-1">
            {title}
          </h3>
          <p className="text-sm font-semibold text-stone-600 dark:text-stone-400 mb-3">
            {tagline}
          </p>

          {handwrittenNote && (
            <p className="font-handwriting text-base sm:text-lg text-amber-700 dark:text-amber-400 font-bold mb-4 -rotate-1">
              ✏️ {handwrittenNote}
            </p>
          )}

          <ul className="space-y-2 mb-6">
            {bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                <span className="text-rose-500 font-bold mt-0.5">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Buttons & Under The Hood */}
      <div className="px-6 pb-6 pt-2 border-t-2 border-stone-100 dark:border-stone-800/80">
        <div className="flex items-center gap-3 mb-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hand-btn px-4 py-2 bg-[#141210] text-white dark:bg-stone-100 dark:text-stone-950 text-xs font-black inline-flex items-center gap-1.5 hover:scale-105 active:scale-95"
            >
              <span>Open the app</span>
              <ArrowUpRight size={14} />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hand-btn px-4 py-2 bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 text-xs font-black inline-flex items-center gap-1.5 hover:scale-105 active:scale-95"
            >
              <span>Code</span>
              <GithubIcon size={14} />
            </a>
          )}
        </div>

        {/* Under The Hood Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-xs font-mono font-bold text-stone-500 hover:text-stone-900 dark:hover:text-white flex items-center gap-1 transition-colors"
        >
          <span>• UNDER THE HOOD</span>
          {open ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
        </button>

        {open && (
          <div className="mt-3 p-3 bg-stone-100 dark:bg-stone-800/70 rounded-xl space-y-1 text-xs font-mono text-stone-700 dark:text-stone-300">
            {underTheHood.map((item, idx) => (
              <div key={idx} className="flex items-start gap-1">
                <span className="text-amber-500">›</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section className="py-16">
      {/* Hand-Drawn Washi Tape Header */}
      <div className="inline-block relative mb-6">
        <span className="washi-tape washi-tape-pink !left-0 !top-[-10px] !w-[90px] !h-[20px] -rotate-3" />
        <span className="relative z-10 px-3 py-1 bg-purple-200 dark:bg-purple-950 font-mono text-xs font-black tracking-widest uppercase border border-stone-800 text-purple-950 dark:text-purple-200 shadow-[2px_2px_0_#141210]">
          AFTER-HOURS
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-2">
        Things I build for fun.
      </h2>
      <p className="text-sm text-stone-600 dark:text-stone-400 mb-8">
        Full-stack apps, vision pipelines, and side projects built to explore new technology.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1: FRAS v2 */}
        <FunProjectCard
          url="fras-v2.vision"
          title="FRAS: Face Recognition System"
          tagline="An end-to-end automated attendance platform for classrooms."
          handwrittenNote="Built so faculty never have to do roll call manually again."
          bullets={[
            "Real-time video frame recognition matches students to database records in < 300ms.",
            "Role-based authentication for Administrators, Faculty, and Students.",
            "Zero double-counted records via defensive session key concurrency locks.",
            "Complete attendance reporting and exportable analytics.",
          ]}
          liveUrl="https://njshafiq.github.io"
          githubUrl="https://github.com/Njshafiq/FRAS_V2"
          underTheHood={[
            "React & TypeScript with Tailwind CSS UI",
            "Java & Spring Boot RESTful API microservice",
            "Python OpenCV Haar-Cascade and LBPH recognizer",
            "PostgreSQL relational database with 3NF schema",
          ]}
        />

        {/* Card 2: Weather Forecast */}
        <FunProjectCard
          url="weather-hub.app"
          title="Smart Weather Forecasting App"
          tagline="Dynamic real-time atmospheric conditions and 5-day forecasts."
          handwrittenNote="Engineered with defensive fallback states so it never breaks."
          bullets={[
            "Asynchronous JavaScript (Fetch API) retrieves live weather for global locations.",
            "Automatic geolocation detection with instant fallback search input.",
            "Animated weather state indicators (rain, clear, clouds, storm).",
            "Responsive UI optimized for mobile, tablet, and desktop viewports.",
          ]}
          liveUrl="https://njshafiq.github.io/WeatherApp"
          githubUrl="https://github.com/Njshafiq/WeatherApp"
          underTheHood={[
            "Vanilla JavaScript ES6+ & Fetch API",
            "OpenWeather REST API integration",
            "CSS Flexbox & CSS Grid responsive architecture",
            "Graceful offline & network error handling",
          ]}
        />

        {/* Card 3: E-Commerce Storefront */}
        <FunProjectCard
          url="storefront.dev"
          title="Modern E-Commerce Storefront"
          tagline="Interactive shopping experience with real-time cart state."
          handwrittenNote="Lightweight and fast without bloated third-party dependencies."
          bullets={[
            "Dynamic product catalog rendering and category filtering.",
            "Client-side cart state management with instant price recalculations.",
            "Smooth hover states and tactile micro-interactions.",
          ]}
          liveUrl="https://njshafiq.github.io"
          githubUrl="https://github.com/Njshafiq"
          underTheHood={[
            "HTML5 semantic layout & CSS3 modern variables",
            "JavaScript DOM manipulation and local storage persistence",
            "Mobile-first responsive viewport design",
          ]}
        />
      </div>
    </section>
  );
}
