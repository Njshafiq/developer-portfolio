import { portfolioData } from "@/data/portfolio";
import { ArrowRight, FileText } from "lucide-react";

export function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="pt-24 pb-8 text-center max-w-4xl mx-auto px-4">
      {/* Hero Headline */}
      <h1 className="text-4xl sm:text-6xl md:text-[64px] font-black tracking-tight leading-[1.08] mb-5 text-stone-950 dark:text-stone-50">
        I build the backends &amp; AI pipelines modern platforms run on.
      </h1>

      <p className="text-lg sm:text-2xl text-stone-700 dark:text-stone-300 font-serif italic max-w-2xl mx-auto mb-2">
        Java &amp; Spring Boot engineer by day. AI &amp; systems builder by night.
      </p>
    </section>
  );
}

export function HeroButtons() {
  const { personal } = portfolioData;

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 py-8">
      <a
        href="#work"
        className="hand-btn px-7 py-3 bg-[#141210] text-white dark:bg-stone-100 dark:text-stone-950 font-black text-sm inline-flex items-center gap-2 hover:scale-[1.02]"
      >
        <span>See what I built</span>
        <ArrowRight size={16} />
      </a>

      <a
        href={personal.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hand-btn px-7 py-3 bg-white dark:bg-stone-900 text-stone-950 dark:text-stone-100 font-black text-sm inline-flex items-center gap-2 hover:scale-[1.02]"
      >
        <span>Get my resume</span>
      </a>

      <a
        href="#contact"
        className="hand-btn px-7 py-3 bg-[#fdf8e6] dark:bg-stone-800 text-stone-950 dark:text-stone-100 font-black text-sm hover:scale-[1.02]"
      >
        Say hello
      </a>
    </div>
  );
}
