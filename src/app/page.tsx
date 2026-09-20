import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { CompanyPositioning } from "@/components/sections/CompanyPositioning";
import { Services } from "@/components/sections/Services";
import { Industries } from "@/components/sections/Industries";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { AboutNarrative } from "@/components/sections/AboutNarrative";
import { FeaturedInsights } from "@/components/sections/FeaturedInsights";
import { VisualBreak } from "@/components/sections/VisualBreak";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <Hero />
        
        {/* Social Proof / Trusted By */}
        <section className="py-12 border-b border-(--vnet-silver-light) bg-white">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <p className="text-sm font-semibold tracking-widest uppercase text-(--vnet-charcoal)/60 mb-8">Trusted By Industry Leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale">
              <span className="text-xl font-bold font-serif">Acme Corp</span>
              <span className="text-xl font-bold font-sans">GlobalTech</span>
              <span className="text-xl font-bold font-mono">FINSYS</span>
              <span className="text-xl font-bold font-serif italic">MediCare Plus</span>
              <span className="text-xl font-bold tracking-tighter">LOGISTICA</span>
            </div>
          </div>
        </section>

        <CompanyPositioning />
        <Services />
        <Industries />
        <ProcessTimeline />
        <FeaturedInsights />
        <VisualBreak />
        <AboutNarrative />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
