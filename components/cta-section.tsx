"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <div className="relative bg-[#273F4F] py-24">
      {/* Content overlay */}
      <div className="flex items-center justify-center z-10">
        <div className="max-w-4xl mx-auto text-center px-4 select-text">
          <h2 className="text-4xl font-bold mb-4 text-[#EFEEEA]">Ready to Elevate Your Operations?</h2>
          <p className="text-lg text-[#EFEEEA]/80 mb-8">
            Book your free PEAK Framework consultation and let us identify exactly where automation can transform your business
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-[#000000] bg-[#FE7743] hover:bg-[#FE7743]/90 rounded-full transition-all duration-300"
          >
            Schedule a Free Consultation →
          </Link>
        </div>
      </div>
    </div>
  );
} 