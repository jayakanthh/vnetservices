import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactCTA } from "@/components/sections/ContactCTA";

const servicesData: Record<string, { title: string; description: string; features: string[] }> = {
  "custom-software": {
    title: "Custom Software Development",
    description: "We build bespoke software solutions engineered for performance, scalability, and security. From enterprise platforms to specialized microservices, our code powers the core of your business.",
    features: ["Microservices Architecture", "API Design & Integration", "Cloud-Native Development", "High-Availability Systems"]
  },
  "mobile-solutions": {
    title: "Mobile Solutions",
    description: "Native and cross-platform mobile experiences that don't compromise on performance. We build intuitive, secure, and resilient mobile applications for iOS and Android.",
    features: ["iOS Native (Swift)", "Android Native (Kotlin)", "React Native / Flutter", "Mobile Device Management (MDM)"]
  },
  "software-testing": {
    title: "Software Testing & QA",
    description: "Rigorous automated and manual testing to ensure your systems perform flawlessly under pressure. We implement shift-left testing methodologies to catch bugs before they reach production.",
    features: ["Automated CI/CD Testing", "Load & Performance Testing", "Security Penetration Testing", "End-to-End UI Testing"]
  },
  "it-consulting": {
    title: "IT Consulting",
    description: "Strategic guidance to navigate complex digital transformations. We audit your existing architecture, recommend modern stacks, and chart a roadmap for technical excellence.",
    features: ["Architecture Audits", "Cloud Migration Strategy", "Technical Due Diligence", "DevOps Transformation"]
  }
};

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-48 pb-20 bg-(--vnet-off-white)">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <p className="text-sm font-semibold tracking-widest uppercase text-(--vnet-violet) mb-4">Service Offering</p>
          <h1 className="text-5xl md:text-6xl font-bold text-(--foreground) mb-8">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-(--vnet-charcoal) leading-relaxed max-w-3xl">
            {service.description}
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <h2 className="text-3xl font-bold mb-12">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.features.map((feature, idx) => (
              <div key={idx} className="p-6 border border-(--vnet-silver-light) rounded-lg">
                <h3 className="text-lg font-semibold text-(--foreground)">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
