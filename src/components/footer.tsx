import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="py-12 border-t-2 border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500 dark:text-stone-400">
      <div className="flex items-center gap-2">
        <span>© {new Date().getFullYear()} {personal.name}</span>
        <span>·</span>
        <span>{personal.location}</span>
      </div>

      <div className="font-handwriting text-lg text-stone-600 dark:text-stone-300 font-bold -rotate-1">
        Drawn by hand, built in Next.js ⚡
      </div>
    </footer>
  );
}
