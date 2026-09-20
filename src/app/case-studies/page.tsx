import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Case Studies | VNet Services",
  description: "Real-world client proof, statistics, and success stories from VNet Services.",
};

const caseStudies = [
  {
    client: "Global Financial Firm",
    title: "Modernizing Legacy Trading Systems",
    metric: "+40%",
    metricLabel: "System Throughput",
    description: "Re-architected a monolithic trading platform into a scalable microservices architecture, reducing latency and increasing transaction throughput.",
  },
  {
    client: "Healthcare Provider",
    title: "Secure Patient Data Portal",
    metric: "100%",
    metricLabel: "HIPAA Compliance",
    description: "Developed a zero-trust, end-to-end encrypted portal for millions of patient records, streamlining doctor-patient communication.",
  },
  {
    client: "Logistics Enterprise",
    title: "AI-Driven Supply Chain Routing",
    metric: "-22%",
    metricLabel: "Operational Costs",
    description: "Implemented machine learning algorithms to predict supply chain bottlenecks and dynamically reroute shipments globally.",
  }
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-48 pb-20 bg-(--vnet-off-white)">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-bold text-(--foreground) mb-8">
            Proven <span className="text-(--vnet-violet)">Impact.</span>
          </h1>
          <p className="text-xl md:text-2xl text-(--vnet-charcoal) leading-relaxed">
            We don't just write code; we deliver measurable business outcomes. Explore how we've helped industry leaders scale and innovate.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="flex flex-col gap-16">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-(--vnet-silver-light) pb-16 last:border-0">
                <div className="lg:col-span-4">
                  <div className="text-(--vnet-violet) font-bold text-6xl mb-2">{study.metric}</div>
                  <div className="text-sm font-semibold tracking-widest uppercase text-(--vnet-charcoal)/70">{study.metricLabel}</div>
                </div>
                <div className="lg:col-span-8">
                  <span className="text-sm font-bold text-(--vnet-violet) block mb-2">{study.client}</span>
                  <h2 className="text-3xl font-bold mb-4">{study.title}</h2>
                  <p className="text-lg text-(--vnet-charcoal) mb-6">{study.description}</p>
                  <button className="flex items-center gap-2 text-(--foreground) font-medium hover:text-(--vnet-violet) transition-colors">
                    Read Full Case Study <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
