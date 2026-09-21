import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const insightsData: Record<string, { title: string; category: string; date: string; content: string }> = {
  "modernizing-legacy-systems": {
    title: "Modernizing Legacy Systems",
    category: "Architecture",
    date: "October 12, 2026",
    content: "The technical debt accumulated in legacy monolithic systems poses a severe risk to enterprise agility. In this insight, we explore the strategic roadmap for strangling the monolith, migrating to event-driven microservices, and achieving zero-downtime deployments.",
  },
  "cost-of-cloud-migration": {
    title: "The True Cost of Cloud Migration",
    category: "Strategy",
    date: "September 28, 2026",
    content: "Lifting and shifting to the cloud often results in bill shock. We break down how to optimize cloud expenditure through cloud-native refactoring, auto-scaling spot instances, and FinOps practices.",
  },
  "implementing-zero-trust": {
    title: "Implementing Zero-Trust",
    category: "Security",
    date: "September 15, 2026",
    content: "Traditional perimeter security is dead. A zero-trust architecture assumes breach and verifies every request. Learn how identity-aware proxies and mutual TLS are reshaping enterprise security.",
  }
};

export function generateStaticParams() {
  return Object.keys(insightsData).map((slug) => ({
    slug: slug,
  }));
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = insightsData[slug];

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-48 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <Link href="/#insights" className="inline-flex items-center gap-2 text-(--vnet-violet) font-medium mb-12 hover:underline">
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          
          <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase text-(--vnet-charcoal)/70 mb-6">
            <span className="text-(--vnet-violet)">{article.category}</span>
            <span>•</span>
            <span>{article.date}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-(--foreground) mb-8 leading-tight">
            {article.title}
          </h1>
          
          <div className="prose prose-lg text-(--vnet-charcoal) prose-headings:text-(--foreground) prose-a:text-(--vnet-violet)">
            <p className="lead text-xl mb-8">{article.content}</p>
            <h2>The Challenge</h2>
            <p>Enterprises today face an unprecedented rate of technological change. Sticking with the status quo is no longer a viable business strategy; it is a guaranteed path to obsolescence.</p>
            <h2>Strategic Implementation</h2>
            <p>Our approach at VNet Services focuses on incremental delivery. By decoupling tightly bound systems and introducing modern CI/CD pipelines, we ensure that risk is minimized while business value is maximized.</p>
            <h2>Conclusion</h2>
            <p>The journey requires commitment, but the operational resilience gained provides a compounding competitive advantage.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
