import { portfolioData } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

export function Experience() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-12 border-t border-zinc-200 dark:border-zinc-800">
      <div className="flex items-center gap-2 mb-8">
        <Briefcase className="text-zinc-500" size={22} />
        <h2 className="text-2xl font-bold tracking-tight">Work Experience</h2>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="relative pl-6 border-l-2 border-zinc-200 dark:border-zinc-800 space-y-2"
          >
            {/* Timeline bullet dot */}
            <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-zinc-400 dark:bg-zinc-600 border-2 border-white dark:border-zinc-950" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-base">
                {exp.role} <span className="text-zinc-400 font-normal">at</span>{" "}
                <span className="text-emerald-600 dark:text-emerald-400">{exp.company}</span>
              </h3>
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                {exp.period}
              </span>
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 text-[11px] font-medium rounded bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

