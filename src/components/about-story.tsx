import { portfolioData } from "@/data/portfolio";
import { AvatarArt } from "./avatar-art";

export function AboutStory() {
  const { personal, education } = portfolioData;

  return (
    <section id="about" className="py-14 max-w-4xl mx-auto px-4">
      {/* Hand-Drawn Washi Tape Sticker Header */}
      <div className="inline-block relative mb-6">
        <span className="washi-tape !left-0 !top-[-10px] !w-[70px] !h-[20px] bg-amber-300 -rotate-3" />
        <span className="relative z-10 px-3 py-1 bg-amber-300 font-mono text-xs font-black tracking-widest uppercase border border-stone-800 text-stone-900 shadow-[2px_2px_0_#141210]">
          ABOUT
        </span>
      </div>

      <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-8">
        <span className="text-orange-500 font-handwriting text-5xl sm:text-6xl mr-2 inline-block -rotate-3">
          Hi,
        </span>{" "}
        I&apos;m {personal.name}.
      </h2>

      {/* Top Grid: Bio with Highlighters & Metrics Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16">
        {/* Left Story Text */}
        <div className="md:col-span-7 space-y-4 text-base sm:text-lg text-stone-800 dark:text-stone-200 leading-relaxed">
          <p>
            Every day, educational institutions and teams need attendance tracked seamlessly. In 2025–2026 I engineered the{" "}
            <mark className="highlighter font-semibold">face recognition attendance pipeline</mark> connecting a React frontend, Spring Boot backend, and Python OpenCV microservice. No manual roll calls.
          </p>
          <p>
            I&apos;m happiest in the parts people avoid:{" "}
            <mark className="highlighter font-semibold">concurrency defensive locks</mark>, queries that crawl, and relational tables that never leak an anomaly.
          </p>

          {/* Hand-Drawn Signature Doodle with Lightbulb */}
          <div className="pt-4 flex items-center gap-3">
            <span className="font-handwriting text-3xl sm:text-4xl text-amber-700 dark:text-amber-400 font-bold -rotate-2">
              Shafiq Ahamed
            </span>
            <span className="text-2xl animate-pulse select-none">💡</span>
          </div>
        </div>

        {/* Right 2x2 Metric Cards Grid */}
        <div className="md:col-span-5 grid grid-cols-2 gap-3.5">
          <div className="hand-card p-4 bg-white dark:bg-stone-900 text-center">
            <div className="text-3xl sm:text-4xl font-black text-stone-950 dark:text-white">
              1,000+
            </div>
            <p className="text-xs font-semibold text-stone-800 dark:text-stone-200 mt-1">
              logs verified
            </p>
            <p className="text-[10px] text-stone-600 dark:text-stone-300 font-mono mt-0.5">
              FRAS v2 automated
            </p>
          </div>

          <div className="hand-card p-4 bg-white dark:bg-stone-900 text-center">
            <div className="text-3xl sm:text-4xl font-black text-amber-500">
              99.2%
            </div>
            <p className="text-xs font-semibold text-stone-800 dark:text-stone-200 mt-1">
              match accuracy
            </p>
            <p className="text-[10px] text-stone-600 dark:text-stone-300 font-mono mt-0.5">
              Python &amp; OpenCV
            </p>
          </div>

          <div className="hand-card p-4 bg-white dark:bg-stone-900 text-center">
            <div className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400">
              &lt; 300ms
            </div>
            <p className="text-xs font-semibold text-stone-800 dark:text-stone-200 mt-1">
              stream latency
            </p>
            <p className="text-[10px] text-stone-600 dark:text-stone-300 font-mono mt-0.5">
              real-time inference
            </p>
          </div>

          <div className="hand-card p-4 bg-white dark:bg-stone-900 text-center">
            <div className="text-3xl sm:text-4xl font-black text-indigo-600 dark:text-indigo-400">
              7.98
            </div>
            <p className="text-xs font-semibold text-stone-800 dark:text-stone-200 mt-1">
              CGPA in B.E. CSE
            </p>
            <p className="text-[10px] text-stone-600 dark:text-stone-300 font-mono mt-0.5">
              Aalim Muhammed Salegh
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section: Polaroid + Outside Work & Things I'm Into */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-4 border-t-2 border-stone-800/10 dark:border-stone-800">
        {/* Left Polaroid Card */}
        <div className="md:col-span-5 relative">
          <div className="hand-card p-4 bg-white dark:bg-stone-900 transform -rotate-1 hover:rotate-0 transition-transform">
            {/* Top Washi Tape */}
            <div className="washi-tape" />

            {/* Sticker Badges */}
            <div className="absolute -top-3 -left-3 text-2xl z-30 select-none animate-bounce">
              🎮
            </div>
            <div className="absolute top-1/2 -right-4 text-2xl z-30 select-none">
              ⭐
            </div>

            <div className="aspect-[4/4.5] rounded-xl overflow-hidden bg-amber-100 dark:bg-stone-800 flex items-center justify-center border-2 border-stone-800">
              <AvatarArt className="w-full h-full object-cover" />
            </div>

            <p className="font-handwriting text-lg text-stone-600 dark:text-stone-300 text-center mt-3 font-bold">
              me, off the clock ⚡
            </p>
          </div>
        </div>

        {/* Right Content: Outside Work */}
        <div className="md:col-span-7 space-y-4">
          <p className="font-mono text-xs font-black tracking-widest text-stone-700 dark:text-stone-300 uppercase">
            OUTSIDE WORK
          </p>
          <p className="text-base text-stone-700 dark:text-stone-300 leading-relaxed">
            I grew up fascinated by how games and operating systems run on low-level compute. Somewhere along the way, I transitioned from playing games to engineering full-stack architectures from scratch in Java, Spring Boot, and Python.
          </p>
          <p className="text-base text-stone-700 dark:text-stone-300 leading-relaxed">
            When I&apos;m not writing backend microservices, I study database optimization, computer vision inference, and clean architecture.
          </p>

          {/* Things I'm Into */}
          <div className="pt-2">
            <p className="font-mono text-xs font-black tracking-widest text-stone-700 dark:text-stone-300 uppercase mb-3">
              THINGS I&apos;M INTO
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="hand-card p-4 bg-blue-50 dark:bg-blue-950/40 !rounded-2xl border-2">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">🎮</span>
                  <h4 className="font-black text-sm">Building Systems</h4>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-400">
                  Java Spring Boot microservices, high-throughput APIs, and clean code.
                </p>
              </div>

              <div className="hand-card p-4 bg-emerald-50 dark:bg-emerald-950/40 !rounded-2xl border-2">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">🗄️</span>
                  <h4 className="font-black text-sm">Databases &amp; AI</h4>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-400">
                  NPTEL Elite DBMS, 3NF schema design, and OpenCV vision pipelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
