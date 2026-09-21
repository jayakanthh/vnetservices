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
        
        {/* Who We Are - Original Content */}
        <section className="py-24 bg-white border-b border-(--vnet-silver-light)">
          <div className="container mx-auto px-6 md:px-12 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-4 text-(--foreground)">Custom Solutions</h3>
                <p className="text-(--vnet-charcoal) leading-relaxed">
                  Our custom software development craftsmanship and business prowess define our approach to devising custom software applications. Abundant expertise married to exquisite development processes helps the software projects we deliver infuse our client's businesses with commercial value and long-lasting market dominance.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-(--foreground)">Customer First Strategy</h3>
                <p className="text-(--vnet-charcoal) leading-relaxed">
                  Customer first strategy is adopted by the customer-centric solutions to make customer business decisions with not products as their center but the customers. Meaning, we will develop products and services with respect to customer interests, aiming to satisfy their needs and wants.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-(--foreground)">Process Oriented Approach</h3>
                <p className="text-(--vnet-charcoal) leading-relaxed">
                  Process-Oriented Approach is a set of axiomatic ideas and actions intended to deal with a problem or situation by developing a resolution model consisting of process entities (step, procedure, task). Thus, predictable and always equally good results are achieved.
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
        <VisualBreak />
        <AboutNarrative />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
