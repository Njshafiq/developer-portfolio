export function Skills() {
  const categories = [
    {
      title: "Building APIs & Backends",
      icon: "☕",
      badge: "Java / Spring",
      skills: ["Java (Core & OOP)", "Spring Boot", "REST APIs", "Python", "FastAPI", "Maven", "OpenCV"],
      bg: "bg-[#fefce8] dark:bg-stone-900",
    },
    {
      title: "Storing and moving data",
      icon: "🗄️",
      badge: "PostgreSQL / SQL",
      skills: ["PostgreSQL", "SQLite", "SQL Fundamentals", "3NF Normalization", "B-Tree Indexing", "ACID Transactions"],
      bg: "bg-[#eff6ff] dark:bg-stone-900",
    },
    {
      title: "Crafting Interfaces",
      icon: "⚛️",
      badge: "React / Web",
      skills: ["React", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "Responsive Design"],
      bg: "bg-[#f0fdf4] dark:bg-stone-900",
    },
    {
      title: "Shipping & Developer Tools",
      icon: "🚀",
      badge: "Git / Linux",
      skills: ["Git & GitHub", "Postman (API Testing)", "Linux / Bash", "VS Code", "Jupyter Notebook", "Data Analytics"],
      bg: "bg-[#faf5ff] dark:bg-stone-900",
    },
  ];

  return (
    <section id="skills" className="py-16">
      {/* Hand-Drawn Washi Tape Header */}
      <div className="inline-block relative mb-6">
        <span className="washi-tape washi-tape-green !left-0 !top-[-10px] !w-[70px] !h-[20px] -rotate-2" />
        <span className="relative z-10 px-3 py-1 bg-emerald-200 dark:bg-emerald-950 font-mono text-xs font-black tracking-widest uppercase border border-stone-800 text-stone-900 dark:text-emerald-200 shadow-[2px_2px_0_#141210]">
          TOOLBOX
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-2">
        Grouped by what they&apos;re for.
      </h2>
      <p className="text-sm text-stone-600 dark:text-stone-400 mb-8">
        Technologies and frameworks I use to engineer resilient full-stack systems.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className={`hand-card p-6 ${cat.bg} relative flex flex-col justify-between`}
          >
            {/* Top Tab Folder Header */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl select-none">{cat.icon}</span>
                  <h3 className="font-black text-xl text-stone-950 dark:text-stone-50">
                    {cat.title}
                  </h3>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black border border-stone-400 dark:border-stone-600 text-stone-600 dark:text-stone-300">
                  {cat.badge}
                </span>
              </div>

              {/* Skills Tags List */}
              <div className="flex flex-wrap gap-2 pt-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="hand-card px-3 py-1 bg-white dark:bg-stone-800 text-xs font-mono font-bold text-stone-800 dark:text-stone-200 !rounded-lg border-2 shadow-[2px_2px_0_#141210]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
