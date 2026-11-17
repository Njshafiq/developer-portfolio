"use client";

import { useState } from "react";
import { Terminal, CheckSquare, Square, Sparkles } from "lucide-react";

export function DreamSection() {
  const quests = [
    { text: "Ship end-to-end AI Face Recognition Attendance System (v2)", done: true },
    { text: "NPTEL Elite Certification in DBMS from IIT Kharagpur", done: true },
    { text: "Masterclass in Real-World API Engineering at NoviTech", done: true },
    { text: "Land first high-impact Software Engineer role", done: false },
  ];

  const techInspirations = [
    "Java & Spring Boot",
    "Python & OpenCV",
    "PostgreSQL",
    "RESTful Microservices",
    "React & TypeScript",
    "Linux & Docker",
  ];

  return (
    <section id="dream" className="py-16 max-w-4xl mx-auto px-4">
      {/* Top Banner Tag */}
      <div className="flex items-center gap-2 mb-4">
        <span className="neo-btn px-3 py-1 rounded text-xs font-mono font-black bg-purple-200 dark:bg-purple-950 text-purple-950 dark:text-purple-200 border border-purple-900 shadow-[2px_2px_0_#141210]">
          ✦ AI &amp; SYSTEMS DEVELOPER ✦ FLAGSHIP SHIPPED
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Column: Retro Terminal HUD */}
        <div className="md:col-span-7">
          <h3 className="text-3xl sm:text-4xl font-black tracking-tight mb-2">
            FRAS: Vision Attendance
          </h3>
          <p className="text-sm text-stone-600 dark:text-stone-400 mb-6 leading-relaxed">
            My flagship project: a real-time automated face-recognition attendance pipeline. Camera stream captures frames, Python OpenCV extracts embeddings, and Spring Boot verifies enrollment and records logs into PostgreSQL.
          </p>

          {/* Retro CRT Game / Scanner Frame */}
          <div className="hand-card p-5 bg-[#0e1626] text-emerald-400 border-4 border-stone-900 shadow-[6px_8px_0_#141210] relative overflow-hidden font-mono">
            {/* Scanlines Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.35)_50%)] bg-[length:100%_4px] pointer-events-none opacity-50 z-10" />

            {/* Header info */}
            <div className="flex items-center justify-between text-xs border-b border-emerald-900/60 pb-3 mb-4 text-emerald-300">
              <span className="flex items-center gap-2 font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                SYSTEM LIVE: CAM_STREAM_01
              </span>
              <span className="text-stone-400">FPS: 30 · LATENCY: 240ms</span>
            </div>

            {/* Scanner View Simulation */}
            <div className="h-52 bg-slate-950/80 rounded-xl border border-emerald-800/40 relative flex items-center justify-center overflow-hidden p-4">
              {/* Target Face Box */}
              <div className="w-36 h-40 border-2 border-dashed border-emerald-400 rounded-lg flex flex-col justify-between p-2 relative bg-emerald-500/5">
                <div className="flex justify-between text-[10px] text-emerald-300 font-bold">
                  <span>[MATCH]</span>
                  <span>99.2%</span>
                </div>
                {/* Center Reticle */}
                <div className="self-center text-center">
                  <div className="text-2xl">👤</div>
                  <div className="text-[10px] text-emerald-300 font-black tracking-wider uppercase mt-1">
                    SHAFIQ AHAMED
                  </div>
                </div>
                <div className="text-[9px] text-emerald-400 font-mono text-center">
                  LOGGED: PRESENT ✓
                </div>
              </div>
            </div>

            {/* Spec Bar */}
            <div className="grid grid-cols-3 gap-2 mt-4 text-[11px] text-center border-t border-emerald-900/60 pt-3">
              <div className="bg-slate-900/90 p-2 rounded border border-emerald-800/40">
                <span className="text-stone-400 block text-[9px]">ENGINE</span>
                <span className="font-bold text-white">OpenCV / Python</span>
              </div>
              <div className="bg-slate-900/90 p-2 rounded border border-emerald-800/40">
                <span className="text-stone-400 block text-[9px]">BACKEND</span>
                <span className="font-bold text-white">Spring Boot</span>
              </div>
              <div className="bg-slate-900/90 p-2 rounded border border-emerald-800/40">
                <span className="text-stone-400 block text-[9px]">DATABASE</span>
                <span className="font-bold text-white">PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Quest Log & Tech Inspirations */}
        <div className="md:col-span-5 space-y-6 pt-2">
          {/* Quest Log Box */}
          <div className="hand-card p-5 bg-white dark:bg-stone-900">
            <div className="flex items-center justify-between border-b-2 border-stone-200 dark:border-stone-800 pb-3 mb-4">
              <h4 className="font-mono text-xs font-black uppercase tracking-widest text-stone-500">
                QUEST LOG
              </h4>
              <span className="font-mono text-xs font-black text-amber-600 dark:text-amber-400">
                3 / 4 COMPLETED
              </span>
            </div>

            <div className="space-y-3">
              {quests.map((q, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs font-bold leading-snug">
                  {q.done ? (
                    <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">☑</span>
                  ) : (
                    <span className="text-stone-400 mt-0.5">☐</span>
                  )}
                  <span className={q.done ? "text-stone-800 dark:text-stone-200" : "text-stone-400 dark:text-stone-500"}>
                    {q.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* The Tech That Made Me Want to Build Systems */}
          <div>
            <p className="font-mono text-xs font-black tracking-widest text-stone-700 dark:text-stone-300 uppercase mb-3">
              THE TECH THAT MADE ME WANT TO BUILD SYSTEMS
            </p>
            <div className="flex flex-wrap gap-2">
              {techInspirations.map((tech, idx) => (
                <span
                  key={idx}
                  className="hand-card px-3.5 py-1.5 bg-[#fef9c3] dark:bg-amber-950/60 font-mono text-xs font-black text-stone-900 dark:text-amber-200 !rounded-xl border-2 shadow-[2px_2px_0_#141210]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

