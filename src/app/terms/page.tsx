import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-48 pb-24">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl prose prose-lg">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <p className="text-(--vnet-charcoal) mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          <p className="text-(--vnet-charcoal) mb-6">
            By accessing and using the VNet Services website, you agree to comply with and be bound by the following terms and conditions of use.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Use of Website</h2>
          <p className="text-(--vnet-charcoal) mb-6">
            The content of the pages of this website is for your general information and use only. It is subject to change without notice.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">2. Intellectual Property</h2>
          <p className="text-(--vnet-charcoal) mb-6">
            This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">3. Governing Law</h2>
          <p className="text-(--vnet-charcoal) mb-6">
            Your use of this website and any dispute arising out of such use of the website is subject to the local laws of our operating jurisdiction.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
