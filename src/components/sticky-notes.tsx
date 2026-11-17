"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface StickyNoteItem {
  title: string;
  desc: string;
  tag: string;
  tapeColor: string;
  bg: string;
  sticker: string;
  underTheHood: string[];
}

function StickyNoteCard({ note }: { note: StickyNoteItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`hand-card p-6 ${note.bg} flex flex-col justify-between relative`}>
      {/* Washi Tape Strip */}
      <div className={note.tapeColor} />

      {/* Top Corner Sticker Badge */}
      <div className="absolute top-4 right-4 text-3xl select-none filter drop-shadow-sm">
        {note.sticker}
      </div>

      <div>
        <div className="flex items-center gap-1.5 text-stone-900 dark:text-stone-100 font-black text-xl sm:text-2xl mb-3 pt-2 pr-12">
          <span>{note.title}</span>
        </div>

        <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed mb-4">
          {note.desc}
        </p>
      </div>

      {/* Under The Hood Expandable */}
      <div className="border-t-2 border-stone-800/10 dark:border-stone-700/50 pt-3 mt-2">
        <button
          onClick={() => setOpen(!open)}
          className="text-xs font-mono font-bold text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white flex items-center gap-1.5 transition-colors"
        >
          <span>• UNDER THE HOOD</span>
          {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        {open && (
          <div className="mt-3 p-3 bg-black/5 dark:bg-white/5 rounded-xl space-y-1.5 text-xs font-mono text-stone-800 dark:text-stone-200">
            {note.underTheHood.map((item, idx) => (
              <div key={idx} className="flex items-start gap-1.5">
                <span className="text-amber-600 font-bold">›</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function StickyNotes() {
  const notes: StickyNoteItem[] = [
    {
      title: "★ Zero double-counted logs",
      desc: "When cameras stream 30 FPS, rapid face detections could write duplicate attendance. I engineered atomic session idempotency in Spring Boot so every record is booked exactly once.",
      tag: "Idempotency & Concurrency",
      tapeColor: "washi-tape",
      bg: "bg-[#fef08a] dark:bg-amber-950/80 border-stone-800 text-stone-900",
      sticker: "🐇",
      underTheHood: [
        "Spring Boot composite unique key check",
        "Atomic transactional boundary in PostgreSQL",
        "In-memory session debounce cache",
      ],
    },
    {
      title: "★ 300 ms ➔ under 100 ms match",
      desc: "The face inference endpoint choked on high-resolution streams. I added image downscaling, histogram equalization, and B-Tree indexes on student IDs to drop latency under 100ms.",
      tag: "Latency Optimization",
      tapeColor: "washi-tape washi-tape-orange",
      bg: "bg-[#fed7aa] dark:bg-orange-950/80 border-stone-800 text-stone-900",
      sticker: "🗄️",
      underTheHood: [
        "OpenCV Grayscale & CLAHE normalization",
        "PostgreSQL B-Tree index on (student_id, date)",
        "JSON serialization payload minimization",
      ],
    },
    {
      title: "★ 99.2% recognition precision",
      desc: "Varying lighting conditions in classrooms triggered false negatives. Tuned LBPH face recognizer confidence thresholds and multi-frame consensus verification.",
      tag: "Vision Tuning",
      tapeColor: "washi-tape washi-tape-green",
      bg: "bg-[#bbf7d0] dark:bg-emerald-950/80 border-stone-800 text-stone-900",
      sticker: "⚡",
      underTheHood: [
        "Multi-frame consensus voting (3 of 5 match)",
        "Haar Cascade frontal face detection",
        "Confidence score threshold calibration",
      ],
    },
    {
      title: "★ Nobody re-keys student logs",
      desc: "Manual attendance sheets took 20+ hours of faculty time every month. With FRAS v2, student attendance is verified in seconds and synchronized straight to database reports.",
      tag: "Process Automation",
      tapeColor: "washi-tape washi-tape-pink",
      bg: "bg-[#bfdbfe] dark:bg-blue-950/80 border-stone-800 text-stone-900",
      sticker: "📊",
      underTheHood: [
        "Automated daily attendance summary queries",
        "CSV / Excel report export API",
        "Role-based authentication for Admin & Faculty",
      ],
    },
  ];

  return (
    <section id="notes" className="py-16 max-w-4xl mx-auto px-4">
      {/* Hand-Drawn Washi Tape Sticker Header */}
      <div className="inline-block relative mb-6">
        <span className="washi-tape !left-0 !top-[-10px] !w-[70px] !h-[20px] bg-amber-300 -rotate-2" />
        <span className="relative z-10 px-3 py-1 bg-amber-200 dark:bg-amber-950 font-mono text-xs font-black tracking-widest uppercase border border-stone-800 text-stone-900 dark:text-amber-200 shadow-[2px_2px_0_#141210]">
          NOTES
        </span>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-2">
          Hard problems, solved.
        </h2>
        <p className="text-sm text-stone-600 dark:text-stone-400">
          Big result first. Then what went wrong, what I did, and the exact stack if you want it.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {notes.map((note, idx) => (
          <StickyNoteCard key={idx} note={note} />
        ))}
      </div>
    </section>
  );
}
