export function AboutNarrative() {
  return (
    <section id="about" className="py-32 bg-(--vnet-off-white)">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-(--foreground) leading-tight sticky top-32">
              Transformative <br />
              Leadership. <br />
              <span className="text-(--vnet-violet)">Human-Centric</span> <br />
              Innovation.
            </h2>
          </div>
          <div className="flex flex-col gap-12 text-lg text-(--vnet-charcoal) font-light">
            <p>
              At VNet Services, we believe that technology is only as powerful as the business value it creates. We operate with a fundamental commitment to Customer-Centric Operations, ensuring every architecture decision and line of code directly supports your organizational objectives.
            </p>
            <div className="h-px w-full bg-(--vnet-silver-light)"></div>
            <p>
              We don't just build software; we engineer resilient systems that empower people. Our Human-Centric Innovations focus on creating intuitive, accessible, and highly productive digital environments for your workforce and customers alike.
            </p>
            <div className="h-px w-full bg-(--vnet-silver-light)"></div>
            <p>
              As a responsible technology partner, we prioritize sustainable architectures, ethical data practices, and Social Responsibility in our operational footprint, ensuring the solutions we build today remain viable for tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
