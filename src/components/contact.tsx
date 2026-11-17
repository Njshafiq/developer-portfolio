"use client";

import { portfolioData } from "@/data/portfolio";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const { personal } = portfolioData;
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate instantaneous delivery
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-12 border-t border-zinc-200 dark:border-zinc-800">
      <div className="flex items-center gap-2 mb-4">
        <Mail className="text-zinc-500" size={22} />
        <h2 className="text-2xl font-bold tracking-tight">Let&apos;s Connect</h2>
      </div>

      <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-xl mb-8">
        Have a project idea, a question, or an exciting opportunity? Drop me a message
        or email directly at{" "}
        <a
          href={`mailto:${personal.email}`}
          className="text-zinc-950 dark:text-zinc-100 underline decoration-zinc-400 hover:decoration-emerald-500 underline-offset-4"
        >
          {personal.email}
        </a>
        .
      </p>

      {submitted ? (
        <div className="p-6 rounded-xl border border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 flex items-center gap-3">
          <CheckCircle2 size={24} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
          <div>
            <p className="font-semibold text-sm">Message received!</p>
            <p className="text-xs text-emerald-700 dark:text-emerald-400">Thanks for reaching out. I will get back to you shortly.</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                Name
              </label>
              <input
                type="text"
                required
                placeholder="Jane Doe"
                className="w-full px-3 py-2 text-sm rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-950 dark:focus:ring-zinc-200 transition-shadow"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="jane@example.com"
                className="w-full px-3 py-2 text-sm rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-950 dark:focus:ring-zinc-200 transition-shadow"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
              Message
            </label>
            <textarea
              required
              rows={4}
              placeholder="Hi Alex, I'd like to collaborate on..."
              className="w-full px-3 py-2 text-sm rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-950 dark:focus:ring-zinc-200 transition-shadow"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 text-sm font-semibold hover:opacity-90 disabled:opacity-50 transition-opacity"
          >
            {loading ? "Sending..." : "Send Message"}
            <Send size={14} />
          </button>
        </form>
      )}
    </section>
  );
}

