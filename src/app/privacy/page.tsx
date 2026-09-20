import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-48 pb-24">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl prose prose-lg">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-(--vnet-charcoal) mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          <p className="text-(--vnet-charcoal) mb-6">
            At VNet Services, we take your privacy seriously. This Privacy Policy describes how we collect, use, and protect your personal data when you visit our website or use our services.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-(--vnet-charcoal) mb-6">
            We may collect personal information such as your name, email address, phone number, and company details when you submit forms on our website.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-(--vnet-charcoal) mb-6">
            We use the information we collect to communicate with you, provide our services, and improve our website experience. We do not sell your personal data to third parties.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">3. Contact Us</h2>
          <p className="text-(--vnet-charcoal) mb-6">
            If you have any questions about this Privacy Policy, please contact us at privacy@vnetservices.com.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
