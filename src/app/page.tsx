import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { CompanyPositioning } from "@/components/sections/CompanyPositioning";
import { Services } from "@/components/sections/Services";
import { Industries } from "@/components/sections/Industries";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { AboutNarrative } from "@/components/sections/AboutNarrative";
import { FeaturedInsights } from "@/components/sections/FeaturedInsights";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <Hero />
        
        {/* Who We Are */}
        <section className="py-24 bg-white border-b border-(--vnet-silver-light)">
          <div className="container mx-auto px-6 md:px-12 max-w-5xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-(--vnet-charcoal)/70 mb-4">Who We Are</p>
            <h2 className="text-3xl md:text-4xl font-bold text-(--foreground) mb-16 max-w-2xl">
              What sets our approach apart.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-(--vnet-silver-light) pt-12">
              <div>
                <h3 className="text-lg font-bold mb-3 text-(--foreground)">Custom Solutions</h3>
                <p className="text-(--vnet-charcoal) leading-relaxed">
                  Bespoke software craftsmanship paired with business prowess, built to give our clients lasting commercial value.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3 text-(--foreground)">Customer First Strategy</h3>
                <p className="text-(--vnet-charcoal) leading-relaxed">
                  We center every decision on customer interests, developing products and services that satisfy real needs.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3 text-(--foreground)">Process Oriented Approach</h3>
                <p className="text-(--vnet-charcoal) leading-relaxed">
                  A disciplined, repeatable process for tackling every engagement—so results stay predictable and consistently strong.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CompanyPositioning />
        <Services />
        <Industries />
        <ProcessTimeline />
        <FeaturedInsights />
        <AboutNarrative />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
