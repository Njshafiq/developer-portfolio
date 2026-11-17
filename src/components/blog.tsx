import { portfolioData } from "@/data/portfolio";
import { BookOpen, ArrowRight } from "lucide-react";

export function Blog() {
  const { posts } = portfolioData;

  return (
    <section id="blog" className="py-12 border-t border-zinc-200 dark:border-zinc-800">
      <div className="flex items-center gap-2 mb-8">
        <BookOpen className="text-zinc-500" size={22} />
        <h2 className="text-2xl font-bold tracking-tight">Writing & Articles</h2>
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group block p-4 -mx-4 rounded-xl hover:bg-zinc-100/70 dark:hover:bg-zinc-900/50 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5">
                {post.title}
                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
              </h3>
              <div className="text-xs text-zinc-400 dark:text-zinc-500 font-mono shrink-0">
                {post.date} · {post.readTime}
              </div>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {post.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

