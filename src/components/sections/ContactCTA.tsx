"use client";

import { useState } from "react";
import { Button } from "../ui/Button";

export function ContactCTA() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-(--vnet-off-white)">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-(--foreground) mb-8 leading-tight">
              Let's build <br />
              <span className="text-(--vnet-violet)">what's next.</span>
            </h2>
            <p className="text-xl text-(--vnet-charcoal) max-w-md leading-relaxed mb-12">
              Partner with VNet Services to engineer the technical foundation your business needs to scale, innovate, and lead.
            </p>
            
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-sm font-semibold tracking-wide uppercase text-(--vnet-silver) mb-2">Global Headquarters</p>
                <p className="text-(--foreground) text-lg font-medium">New York, NY</p>
              </div>
              <div>
                <p className="text-sm font-semibold tracking-wide uppercase text-(--vnet-silver) mb-2">General Enquiries</p>
                <a href="mailto:hello@vnetservices.com" className="text-(--vnet-violet) text-lg font-medium hover:underline">hello@vnetservices.com</a>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 shadow-sm border border-(--vnet-silver-light)">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Message Received</h3>
                <p className="text-(--vnet-charcoal)">Thank you for reaching out. A VNet strategy consultant will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-semibold text-(--vnet-charcoal)">Name</label>
                    <input type="text" id="name" required className="border-b border-(--vnet-silver) py-2 bg-transparent focus:outline-none focus:border-(--vnet-violet) transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-sm font-semibold text-(--vnet-charcoal)">Company</label>
                    <input type="text" id="company" required className="border-b border-(--vnet-silver) py-2 bg-transparent focus:outline-none focus:border-(--vnet-violet) transition-colors" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-semibold text-(--vnet-charcoal)">Email</label>
                    <input type="email" id="email" required className="border-b border-(--vnet-silver) py-2 bg-transparent focus:outline-none focus:border-(--vnet-violet) transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-(--vnet-charcoal)">Phone</label>
                    <input type="tel" id="phone" className="border-b border-(--vnet-silver) py-2 bg-transparent focus:outline-none focus:border-(--vnet-violet) transition-colors" />
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-4">
                  <label htmlFor="help" className="text-sm font-semibold text-(--vnet-charcoal)">How can we help?</label>
                  <select id="help" className="border-b border-(--vnet-silver) py-2 bg-transparent focus:outline-none focus:border-(--vnet-violet) transition-colors text-(--foreground)">
                    <option>Custom Software Development</option>
                    <option>Mobile Solutions</option>
                    <option>Software Testing</option>
                    <option>IT Consulting</option>
                    <option>Other Enquiry</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2 mt-4 mb-6">
                  <label htmlFor="message" className="text-sm font-semibold text-(--vnet-charcoal)">Message</label>
                  <textarea id="message" rows={3} required className="border-b border-(--vnet-silver) py-2 bg-transparent focus:outline-none focus:border-(--vnet-violet) transition-colors resize-none"></textarea>
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Talk to VNet"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
