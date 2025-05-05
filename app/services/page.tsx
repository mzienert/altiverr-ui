import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Altiverr",
  description: "Explore Altiverr's comprehensive range of business transformation services",
};

export default function ServicesPage() {
  return (
    <div className="px-4 mx-auto max-w-7xl py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#EFEEEA] tracking-tight">
        Our <span className="text-[#FE7743]">Services</span>
      </h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-[#EFEEEA]/80 leading-relaxed mb-6">
          Explore our comprehensive suite of services designed to drive your business forward.
        </p>
        
        {/* Add service cards or sections here */}
        <div className="bg-[#273F4F]/30 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#273F4F]/50 mt-8">
          <h2 className="text-2xl font-bold mb-4 text-[#EFEEEA]">Service details coming soon</h2>
          <p className="text-[#EFEEEA]/80">
            We're currently updating our services section with detailed information about our offerings.
            Check back soon or contact us directly to learn more about how we can help your business.
          </p>
        </div>
      </div>
    </div>
  );
} 