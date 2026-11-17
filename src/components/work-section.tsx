"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Check, ExternalLink } from "lucide-react";

interface WorkCardProps {
  title: string;
  tagline: string;
  badge?: string;
  badgeColor?: string;
  handwrittenNote?: string;
  underTheHood: string[];
  visual?: React.ReactNode;
}

function WorkCard({
  title,
  tagline,
  badge,
  badgeColor = "bg-emerald-100 text-emerald-800 border-emerald-400",
  handwrittenNote,
  underTheHood,
  visual,
}: WorkCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="hand-card p-6 bg-[#fdfcf9] dark:bg-stone-900 flex flex-col justify-between">
      <div>
        {/* Visual Snippet / Metric (e.g. attendance grid, ledger, etc.) */}
        {visual && <div className="mb-4">{visual}</div>}

        <div className="flex items-center justify-between gap-2 mb-2">
          <h4 className="text-xl font-black tracking-tight text-stone-950 dark:text-stone-50">
            {title}
          </h4>
          {badge && (
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-black border ${badgeColor}`}>
              {badge}
            </span>
          )}
        </div>

        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-3">
          {tagline}
        </p>

        {handwrittenNote && (
          <p className="font-handwriting text-base sm:text-lg text-rose-600 dark:text-rose-400 font-bold mb-3 -rotate-1">
            ✏️ {handwrittenNote}
          </p>
        )}
      </div>

      {/* Under The Hood Expandable */}
      <div className="border-t-2 border-stone-200 dark:border-stone-800 pt-3 mt-2">
        <button
          onClick={() => setOpen(!open)}
          className="text-xs font-mono font-bold text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-white flex items-center gap-1.5 transition-colors"
        >
          <span>• UNDER THE HOOD</span>
          {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        {open && (
          <div className="mt-3 p-3 bg-stone-100 dark:bg-stone-800/80 rounded-xl space-y-1.5 text-xs font-mono text-stone-700 dark:text-stone-300">
            {underTheHood.map((item, idx) => (
              <div key={idx} className="flex items-start gap-1.5">
                <span className="text-amber-500 font-bold">›</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function WorkSection() {
  // Attendance grid visualizer with 96% present dots
  const attendanceDots = Array.from({ length: 28 }, (_, i) => i === 4 || i === 18 ? "absent" : "present");

  return (
    <section id="work" className="py-16 max-w-4xl mx-auto px-4">
      {/* Hand-Drawn Section Header */}
      <div className="inline-block relative mb-6">
        <span className="washi-tape washi-tape-orange !left-0 !top-[-10px] !w-[70px] !h-[20px] -rotate-2" />
        <span className="relative z-10 px-3 py-1 bg-amber-200 dark:bg-amber-950 font-mono text-xs font-black tracking-widest uppercase border border-stone-800 text-stone-900 dark:text-amber-200 shadow-[2px_2px_0_#141210]">
          WORK
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-2">
        Systems built to run reliably.
      </h2>
      <p className="text-sm text-stone-600 dark:text-stone-400 mb-8">
        Production architecture, clean workflows, and systems designed to prevent failure.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: Attendance, on time */}
        <WorkCard
          title="Attendance, on time"
          tagline="Face verification, leave and session records for 1,000+ students, worked out automatically."
          visual={
            <div className="p-3 bg-stone-100 dark:bg-stone-800/70 rounded-xl border border-stone-300 dark:border-stone-700 flex items-center justify-between">
              <div className="grid grid-cols-7 gap-1">
                {attendanceDots.slice(0, 21).map((status, i) => (
                  <span
                    key={i}
                    className={`w-2 h-2 rounded-sm ${
                      status === "present"
                        ? "bg-emerald-500"
                        : "bg-rose-400"
                    }`}
                  />
                ))}
              </div>
              <span className="px-2 py-1 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-mono text-xs font-black">
                96% present
              </span>
            </div>
          }
          underTheHood={[
            "Spring Boot REST session controller",
            "OpenCV Haar Cascade & LBPH recognition",
            "PostgreSQL indexed enrollment records",
          ]}
        />

        {/* Card 2: From camera to invoice/record */}
        <WorkCard
          title="From stream to verified log"
          tagline="Live video ingestion, feature extraction, and registration match without a lost millisecond."
          visual={
            <div className="p-3 bg-stone-100 dark:bg-stone-800/70 rounded-xl border border-stone-300 dark:border-stone-700 flex items-center justify-between font-mono text-xs font-bold text-stone-700 dark:text-stone-300">
              <span>CAM_01 ➔ PY_SERVICE</span>
              <span className="text-emerald-600 font-black">200 OK</span>
            </div>
          }
          underTheHood={[
            "Asynchronous HTTP stream buffer",
            "Python FastAPI inference endpoint",
            "JSON payload validation & schema locks",
          ]}
        />

        {/* Card 3: Books that always balance (DBMS) */}
        <WorkCard
          title="Schemas that always balance"
          tagline="Every transaction posts to the ledger and relational tables cleanly, with zero redundant anomalies."
          badge="Balanced ✓"
          badgeColor="bg-emerald-100 text-emerald-800 border-emerald-400"
          handwrittenNote="NPTEL IIT Kharagpur Elite Certified"
          visual={
            <div className="p-2.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-300 dark:border-amber-800/60 font-mono text-[11px] space-y-1">
              <div className="flex justify-between text-stone-500 font-bold">
                <span>JOURNAL #4021</span>
                <span>STATUS: 3NF</span>
              </div>
              <div className="flex justify-between font-black text-stone-800 dark:text-stone-200">
                <span>Relational Integrity</span>
                <span className="text-emerald-600">100.0%</span>
              </div>
            </div>
          }
          underTheHood={[
            "Strict 3rd Normal Form (3NF) relational design",
            "ACID atomic transaction blocks in PostgreSQL",
            "Foreign key constraints with cascade rules",
          ]}
        />

        {/* Card 4: Weather App */}
        <WorkCard
          title="Zero-crash weather engine"
          tagline="Global atmospheric forecasting with defensive geolocation fallbacks and resilient fetch states."
          visual={
            <div className="p-2.5 bg-sky-50 dark:bg-sky-950/40 rounded-xl border border-sky-300 dark:border-sky-800/60 flex items-center justify-between font-mono text-xs">
              <span className="font-bold text-sky-800 dark:text-sky-300">🌤️ CHENNAI 32°C</span>
              <span className="text-emerald-600 font-bold">Live Stream</span>
            </div>
          }
          underTheHood={[
            "Vanilla JavaScript Asynchronous Fetch API",
            "Defensive loading skeleton fallback states",
            "Graceful timeout error recovery",
          ]}
        />

        {/* Card 5: E-Commerce Storefront */}
        <WorkCard
          title="Reactive cart & checkout"
          tagline="Mobile-first product catalog with dynamic shopping cart state and zero external UI bloat."
          visual={
            <div className="p-2.5 bg-stone-100 dark:bg-stone-800/70 rounded-xl border border-stone-300 dark:border-stone-700 flex items-center justify-between font-mono text-xs">
              <span>ITEMS IN CART: 3</span>
              <span className="text-amber-600 font-black">₹ 2,499.00</span>
            </div>
          }
          underTheHood={[
            "CSS Flexbox / CSS Grid responsive layout",
            "Client-side state synchronization",
            "Lightweight DOM manipulation",
          ]}
        />

        {/* Card 6: Concurrency & Lock Defense */}
        <WorkCard
          title="Defensive concurrency"
          tagline="Ensures rapid multiple face frames in a single class never double-count or trigger race conditions."
          badge="Zero Duplicates"
          badgeColor="bg-amber-100 text-amber-800 border-amber-400"
          visual={
            <div className="p-2.5 bg-stone-100 dark:bg-stone-800/70 rounded-xl border border-stone-300 dark:border-stone-700 flex items-center justify-between font-mono text-xs font-bold">
              <span>UNIQUE SESSION KEY</span>
              <span className="text-emerald-500 font-mono font-black">LOCKED</span>
            </div>
          }
          underTheHood={[
            "Spring Boot unique constraint validation",
            "Atomic timestamp comparison",
            "PostgreSQL indexed composite keys",
          ]}
        />
      </div>
    </section>
  );
}

