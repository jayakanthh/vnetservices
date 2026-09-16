import { ArrowRight } from "lucide-react";

export function FeaturedInsights() {
  return (
    <section id="insights" className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-16 border-b border-(--vnet-silver-light) pb-8">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-(--vnet-silver) mb-4">Perspectives</p>
            <h2 className="text-4xl md:text-5xl font-bold text-(--foreground)">Latest Insights</h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-(--vnet-violet) font-semibold uppercase tracking-wide text-sm group">
            View All Perspectives
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Feature */}
          <div className="lg:col-span-7 group cursor-pointer">
            <div className="w-full h-[400px] bg-(--vnet-off-white) mb-6 overflow-hidden relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-(--vnet-violet-dark) to-(--vnet-violet-light) opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
            </div>
            <p className="text-sm font-semibold tracking-wide uppercase text-(--vnet-violet) mb-3">Enterprise Architecture</p>
            <h3 className="text-3xl font-bold mb-4 text-(--foreground) group-hover:text-(--vnet-violet) transition-colors">Modernizing Legacy Systems for the Next Decade of Scale</h3>
            <p className="text-(--vnet-charcoal) leading-relaxed">Strategic approaches to untangling technical debt and implementing microservices architectures without disrupting core business operations.</p>
          </div>

          {/* Secondary Features */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="group cursor-pointer border-b border-(--vnet-silver-light) pb-8">
              <p className="text-sm font-semibold tracking-wide uppercase text-(--vnet-violet) mb-2">Cloud Strategy</p>
              <h4 className="text-xl font-bold mb-3 text-(--foreground) group-hover:text-(--vnet-violet) transition-colors">The True Cost of Cloud Migration: Avoiding Common Pitfalls</h4>
              <p className="text-(--vnet-charcoal) text-sm line-clamp-2">An analysis of hidden expenses in cloud transformation and how to establish robust FinOps practices early.</p>
            </div>
            
            <div className="group cursor-pointer border-b border-(--vnet-silver-light) pb-8">
              <p className="text-sm font-semibold tracking-wide uppercase text-(--vnet-violet) mb-2">Security</p>
              <h4 className="text-xl font-bold mb-3 text-(--foreground) group-hover:text-(--vnet-violet) transition-colors">Implementing Zero-Trust Architecture in Hybrid Environments</h4>
              <p className="text-(--vnet-charcoal) text-sm line-clamp-2">Why perimeter defense is obsolete and how established organizations are adapting their security postures.</p>
            </div>
            
            <div className="group cursor-pointer">
              <p className="text-sm font-semibold tracking-wide uppercase text-(--vnet-violet) mb-2">Data Engineering</p>
              <h4 className="text-xl font-bold mb-3 text-(--foreground) group-hover:text-(--vnet-violet) transition-colors">Building Actionable Data Pipelines for Real-Time Decision Making</h4>
              <p className="text-(--vnet-charcoal) text-sm line-clamp-2">Moving from siloed data warehouses to event-driven architectures that power immediate business insights.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
