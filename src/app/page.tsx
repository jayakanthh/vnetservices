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
