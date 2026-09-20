import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-48 pb-24">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl prose prose-lg">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          <p className="text-(--vnet-charcoal) mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          <p className="text-(--vnet-charcoal) mb-6">
            This Cookie Policy explains how VNet Services uses cookies and similar technologies to recognize you when you visit our website.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">1. What are cookies?</h2>
          <p className="text-(--vnet-charcoal) mb-6">
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. They are widely used by website owners in order to make their websites work, or to work more efficiently.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">2. How we use cookies</h2>
          <p className="text-(--vnet-charcoal) mb-6">
            We use cookies to enhance your browsing experience, analyze site traffic, and understand where our audience is coming from.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">3. Managing cookies</h2>
          <p className="text-(--vnet-charcoal) mb-6">
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by adjusting the settings in your web browser.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
