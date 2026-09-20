import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "About Us | VNet Services",
  description: "Learn about VNet Services, our transformative leadership, and our mission to build technology around your business.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-48 pb-20 bg-(--vnet-off-white)">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-(--foreground) mb-8">
            Transformative <span className="text-(--vnet-violet)">Leadership.</span>
          </h1>
          <p className="text-xl md:text-2xl text-(--vnet-charcoal) leading-relaxed">
            We are a team of digital engineers, strategists, and consultants dedicated to abstracting away technical complexity so you can focus on growth.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12">Our Story</h2>
          <div className="prose prose-lg text-(--vnet-charcoal)">
            <p className="mb-6">
              Founded on the principle that technology should work for your business—not the other way around—VNet Services has grown into a premier partner for organizations seeking scalable, resilient, and innovative digital solutions.
            </p>
            <p className="mb-6">
              We bridge the gap between strategic vision and technical execution. Our methodology ensures that every line of code we write and every system we architect directly contributes to your bottom line.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-20 mb-12">Executive Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="w-full h-80 bg-(--vnet-silver-light) rounded-xl mb-6"></div>
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-(--vnet-violet) font-medium mb-4">Chief Executive Officer</p>
              <p className="text-(--vnet-charcoal)/80">With over two decades of enterprise technology experience, John leads VNet's strategic vision and global operations.</p>
            </div>
            <div>
              <div className="w-full h-80 bg-(--vnet-silver-light) rounded-xl mb-6"></div>
              <h3 className="text-xl font-bold">Jane Smith</h3>
              <p className="text-(--vnet-violet) font-medium mb-4">Chief Technology Officer</p>
              <p className="text-(--vnet-charcoal)/80">Jane oversees our digital engineering practices, ensuring that our architectural solutions remain at the cutting edge of innovation.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
