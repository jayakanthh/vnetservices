import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-(--vnet-charcoal) text-white pt-20 pb-10 border-t border-(--vnet-violet-dark)">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <img src="/vnetservices/logo-with-text.png" alt="VNet" className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="text-(--vnet-silver-light) max-w-sm mb-8 text-sm leading-relaxed">
              Technology built around your business. We deliver custom software development, IT consulting, and strategic digital engineering to established organizations.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/vnet-services/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-(--vnet-silver)/30 flex items-center justify-center hover:bg-(--vnet-violet) hover:border-transparent transition-all">
                <span className="sr-only">LinkedIn</span>
                in
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-6 text-(--vnet-silver)">Services</h4>
            <ul className="flex flex-col gap-4 text-sm text-(--vnet-silver-light)">
              <li><Link href="/services/custom-software" className="hover:text-white transition-colors">Custom Software</Link></li>
              <li><Link href="/services/mobile-solutions" className="hover:text-white transition-colors">Mobile Solutions</Link></li>
              <li><Link href="/services/software-testing" className="hover:text-white transition-colors">Software Testing</Link></li>
              <li><Link href="/services/it-consulting" className="hover:text-white transition-colors">IT Consulting</Link></li>
              <li><Link href="/services/custom-software" className="hover:text-white transition-colors">Digital Engineering</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-6 text-(--vnet-silver)">Industries</h4>
            <ul className="flex flex-col gap-4 text-sm text-(--vnet-silver-light)">
              <li><Link href="/#industries" className="hover:text-white transition-colors">Software & Tech</Link></li>
              <li><Link href="/#industries" className="hover:text-white transition-colors">Gaming</Link></li>
              <li><Link href="/#industries" className="hover:text-white transition-colors">Hospitality</Link></li>
              <li><Link href="/#industries" className="hover:text-white transition-colors">Financial Services</Link></li>
              <li><Link href="/#industries" className="hover:text-white transition-colors flex items-center gap-1">View All <ArrowUpRight className="w-3 h-3" /></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-6 text-(--vnet-silver)">Company</h4>
            <ul className="flex flex-col gap-4 text-sm text-(--vnet-silver-light)">
              <li><Link href="/about" className="hover:text-white transition-colors">About VNet</Link></li>
              <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/#insights" className="hover:text-white transition-colors">Insights & News</Link></li>
              <li><Link href="/#contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-(--vnet-silver)/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-(--vnet-silver)">
          <p>&copy; {currentYear} VNet Services. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
