import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const articles = [
  {
    category: "Architecture",
    title: "Modernizing Legacy Systems",
    slug: "modernizing-legacy-systems",
    date: "Oct 12, 2026",
    excerpt: "The technical debt accumulated in legacy monolithic systems poses a severe risk to enterprise agility.",
  },
  {
    category: "Strategy",
    title: "The True Cost of Cloud Migration",
    slug: "cost-of-cloud-migration",
    date: "Sep 28, 2026",
    excerpt: "Lifting and shifting to the cloud often results in bill shock. We break down how to optimize cloud expenditure.",
  },
  {
    category: "Security",
    title: "Implementing Zero-Trust",
    slug: "implementing-zero-trust",
    date: "Sep 15, 2026",
    excerpt: "Traditional perimeter security is dead. A zero-trust architecture assumes breach and verifies every request.",
  }
];

export function FeaturedInsights() {
  return (
    <section id="insights" className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-(--foreground)">Latest Insights</h2>
          </div>
          <Link href="/insights/modernizing-legacy-systems" className="flex items-center gap-2 font-medium text-(--vnet-violet) hover:gap-4 transition-all">
            View All Articles <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Link href={`/insights/${article.slug}`} key={index} className="group cursor-pointer flex flex-col h-full border border-(--vnet-silver-light) p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm font-bold text-(--vnet-violet)">{article.category}</span>
                <span className="text-xs text-(--vnet-charcoal)/60 font-medium">{article.date}</span>
              </div>
              <h3 className="text-2xl font-bold text-(--foreground) mb-4 group-hover:text-(--vnet-violet) transition-colors">{article.title}</h3>
              <p className="text-(--vnet-charcoal) mb-8 flex-grow">{article.excerpt}</p>
              <div className="flex items-center gap-2 text-sm font-bold text-(--foreground) mt-auto">
                Read Article <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
