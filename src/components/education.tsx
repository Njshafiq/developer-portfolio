import { portfolioData } from "@/data/portfolio";
import { GraduationCap, Award, ExternalLink } from "lucide-react";

export function EducationAndCerts() {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" className="py-16">
      {/* Hand-Drawn Washi Tape Header */}
      <div className="inline-block relative mb-6">
        <span className="washi-tape !left-0 !top-[-10px] !w-[70px] !h-[20px] bg-amber-300 -rotate-2" />
        <span className="relative z-10 px-3 py-1 bg-amber-200 dark:bg-amber-950 font-mono text-xs font-black tracking-widest uppercase border border-stone-800 text-stone-900 dark:text-amber-200 shadow-[2px_2px_0_#141210]">
          CREDENTIALS
        </span>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-2">
          How I got here.
        </h2>
        <p className="text-sm text-stone-600 dark:text-stone-400">
          Formal engineering foundation and accredited industry credentials.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Education */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs font-black text-stone-700 dark:text-stone-300 uppercase tracking-wider">
            <GraduationCap size={16} />
            <span>Academic Background</span>
          </div>

          {education.map((edu, idx) => (
            <div
              key={idx}
              className="hand-card p-6 bg-white dark:bg-stone-900 relative"
            >
              <div className="washi-tape washi-tape-green !left-6 !-top-3" />

              <div className="flex items-start justify-between gap-3 pt-1">
                <div>
                  <h3 className="font-black text-base text-stone-950 dark:text-stone-100">
                    {edu.degree}
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-stone-400 font-semibold mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-stone-400">
                    {edu.location}
                  </p>
                </div>
                <span className="hand-card px-2.5 py-1 bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-200 text-xs font-mono font-black shrink-0 !rounded-lg border-2">
                  CGPA {edu.cgpa}
                </span>
              </div>
              <p className="text-xs font-mono text-stone-500 pt-3 mt-3 border-t-2 border-stone-100 dark:border-stone-800">
                {edu.period}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs font-black text-stone-700 dark:text-stone-300 uppercase tracking-wider">
            <Award size={16} />
            <span>Accredited Credentials</span>
          </div>

          <div className="space-y-3">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="hand-card p-4 bg-white dark:bg-stone-900 flex items-center justify-between gap-4"
              >
                <div>
                  <h4 className="font-black text-sm text-stone-950 dark:text-stone-100">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-stone-500 font-medium">
                    {cert.issuer} · {cert.date}
                  </p>
                  {cert.score && (
                    <span className="inline-block mt-1 font-mono text-[10px] font-bold text-amber-700 dark:text-amber-400">
                      ★ {cert.score}
                    </span>
                  )}
                </div>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hand-btn px-3 py-1.5 bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 text-xs font-mono font-bold inline-flex items-center gap-1 shrink-0 hover:scale-105 active:scale-95"
                  >
                    <span>View</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
