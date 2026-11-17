"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { AvatarArt } from "./avatar-art";
import { Check, Copy, ArrowRight, Download, FileText, Mail } from "lucide-react";

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function ContactBillboard() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleOpenGmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name || "Visitor"}`);
    const body = encodeURIComponent(`Hi Shafiq,\n\n${message}\n\nFrom: ${name} (${email})`);
    window.open(`mailto:${personal.email}?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 max-w-4xl mx-auto px-4">
      {/* Big Comic Billboard Banner */}
      <div className="relative mb-16 text-center">
        {/* Anime Character Leaning Over the Sign */}
        <div className="w-36 h-36 mx-auto -mb-10 relative z-20 pointer-events-none">
          <AvatarArt className="w-full h-full filter drop-shadow-[0_8px_12px_rgba(0,0,0,0.15)]" />
        </div>

        {/* Billboard Container */}
        <div className="hand-card p-8 sm:p-14 bg-stone-950 text-white !border-4 !rounded-[36px] shadow-[8px_12px_0_#141210] relative">
          {/* Top washi tape stickers */}
          <div className="washi-tape !left-8 !-top-3" />
          <div className="washi-tape washi-tape-orange !right-8 !-top-3" />

          {/* Comic Billboard Title */}
          <h2 className="text-4xl sm:text-7xl font-black tracking-tight uppercase leading-[0.9] text-white">
            LET&apos;S BUILD
          </h2>
          <div className="text-3xl sm:text-5xl font-handwriting text-rose-500 font-bold -rotate-2 mt-2">
            together!! 🚀
          </div>

          <p className="text-stone-300 text-sm sm:text-base font-medium max-w-md mx-auto mt-6">
            Got a hard backend problem, an AI pipeline, or an internship role? I&apos;d love to hear it.
          </p>

          {/* Email Copy Pill with Handwritten Pointer Note */}
          <div className="relative mt-8 inline-block">
            {/* Handwritten note with curved arrow on desktop */}
            <div className="hidden md:flex absolute -left-56 top-2 items-center gap-2 pointer-events-none">
              <span className="font-handwriting text-amber-300 text-xl font-bold -rotate-6">
                Email is the fastest way to reach me
              </span>
              <span className="text-2xl text-amber-300 -rotate-12">➔</span>
            </div>

            <div className="hand-card inline-flex items-center gap-3 px-5 py-2.5 bg-stone-900 border-2 border-stone-700 !rounded-full shadow-[3px_4px_0_#000]">
              <Mail size={16} className="text-stone-400" />
              <span className="font-mono text-xs sm:text-sm font-bold text-stone-200">
                {personal.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1 bg-stone-800 hover:bg-stone-700 active:scale-95 text-stone-200 rounded-full font-mono text-xs font-bold transition-all flex items-center gap-1 border border-stone-600"
              >
                {copied ? (
                  <>
                    <Check size={12} className="text-emerald-400" />
                    <span className="text-emerald-400">copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    <span>copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* 3 Social Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8">
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hand-btn px-5 py-2.5 bg-white text-stone-950 font-black text-xs inline-flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <LinkedinIcon size={15} />
              <span>LinkedIn</span>
            </a>

            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hand-btn px-5 py-2.5 bg-white text-stone-950 font-black text-xs inline-flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <GithubIcon size={15} />
              <span>GitHub</span>
            </a>

            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hand-btn px-5 py-2.5 bg-amber-300 text-stone-950 font-black text-xs inline-flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <FileText size={15} />
              <span>Resume ↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Two Cards Side by Side Below Billboard */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Card: "Or leave a note" */}
        <div className="md:col-span-7 hand-card p-6 sm:p-8 bg-white dark:bg-stone-900 relative">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-black text-stone-950 dark:text-stone-50 flex items-center gap-2">
              <span>Or leave a note</span>
              <span className="text-2xl">✏️</span>
            </h3>
          </div>

          <form onSubmit={handleOpenGmail} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-xs font-bold text-stone-700 dark:text-stone-300 uppercase mb-1">
                  Your name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Recruiter at Acme..."
                  className="w-full px-3.5 py-2.5 rounded-xl border-2 border-stone-800 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div>
                <label className="block font-mono text-xs font-bold text-stone-700 dark:text-stone-300 uppercase mb-1">
                  Your email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="recruiter@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border-2 border-stone-800 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-xs font-bold text-stone-700 dark:text-stone-300 uppercase mb-1">
                Message
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi Shafiq, we have an opening for a Software Engineer role..."
                className="w-full px-3.5 py-2.5 rounded-xl border-2 border-stone-800 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <button
                type="submit"
                className="hand-btn px-6 py-3 bg-[#141210] text-white dark:bg-stone-100 dark:text-stone-950 font-black text-xs inline-flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <span>Open in Gmail</span>
                <ArrowRight size={14} />
              </button>
              <span className="font-handwriting text-sm text-stone-500 italic">
                Opens a ready-to-send draft to me in Gmail.
              </span>
            </div>
          </form>
        </div>

        {/* Right Card: "In a hurry?" Sticky Summary Note */}
        <div className="md:col-span-5 hand-card p-6 sm:p-8 bg-[#fef9c3] dark:bg-amber-950/80 text-stone-950 dark:text-stone-100 relative">
          {/* Top Washi Tape */}
          <div className="washi-tape !left-12 !-top-3" />

          <h3 className="text-2xl font-black mb-6">
            In a hurry?
          </h3>

          <div className="space-y-4 font-mono text-xs">
            <div>
              <span className="text-[10px] uppercase font-bold text-stone-500 dark:text-amber-300/70 block">
                ROLE
              </span>
              <p className="font-bold text-stone-900 dark:text-amber-100 text-sm">
                Software Engineer &amp; Full-Stack Developer
              </p>
            </div>

            <div>
              <span className="text-[10px] uppercase font-bold text-stone-500 dark:text-amber-300/70 block">
                EDUCATION
              </span>
              <p className="font-bold text-stone-900 dark:text-amber-100">
                B.E. Computer Science (CGPA: 7.98)
              </p>
            </div>

            <div>
              <span className="text-[10px] uppercase font-bold text-stone-500 dark:text-amber-300/70 block">
                FLAGSHIP WORK
              </span>
              <p className="font-bold text-stone-900 dark:text-amber-100">
                FRAS v2: Automated Face Recognition Attendance System
              </p>
            </div>

            <div>
              <span className="text-[10px] uppercase font-bold text-stone-500 dark:text-amber-300/70 block">
                AVAILABILITY
              </span>
              <p className="font-bold text-stone-900 dark:text-amber-100">
                Open to new roles: Chennai, Bangalore or remote
              </p>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t-2 border-stone-800/10 dark:border-amber-900">
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hand-btn w-full py-3 bg-[#141210] text-white dark:bg-stone-100 dark:text-stone-950 font-black text-xs inline-flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
            >
              <Download size={14} />
              <span>Download resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
