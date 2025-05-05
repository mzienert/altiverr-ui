import { Metadata } from "next";
import ConsultationCalendar from "./consultation-calendar";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Consultation | Altiverr",
  description: "Schedule a free consultation with Altiverr to discuss your business transformation needs",
};

export default function ConsultationPage() {
  return (
    <div className="px-4 mx-auto max-w-7xl py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#EFEEEA] tracking-tight">
          Book Your <span className="text-[#FE7743]">Free Consultation</span>
        </h1>
        <p className="text-lg mb-8 max-w-3xl mx-auto text-[#EFEEEA]/80 leading-relaxed">
          Take the first step towards transforming your business operations. Schedule a 30-minute
          consultation to discuss your unique challenges and how we can help you implement
          effective systems.
        </p>
      </div>
      
      <div className="bg-[#273F4F]/30 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#273F4F]/50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-semibold mb-4 text-[#EFEEEA]">What to Expect</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-[#FE7743]/20 text-[#FE7743] rounded-full p-1 mr-3 mt-1">
                  <Check size={16} />
                </span>
                <span className="text-[#EFEEEA]/90">A deep dive into your current business systems</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-[#FE7743]/20 text-[#FE7743] rounded-full p-1 mr-3 mt-1">
                  <Check size={16} />
                </span>
                <span className="text-[#EFEEEA]/90">Identification of key bottlenecks and inefficiencies</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-[#FE7743]/20 text-[#FE7743] rounded-full p-1 mr-3 mt-1">
                  <Check size={16} />
                </span>
                <span className="text-[#EFEEEA]/90">Strategic recommendations for systemization</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-[#FE7743]/20 text-[#FE7743] rounded-full p-1 mr-3 mt-1">
                  <Check size={16} />
                </span>
                <span className="text-[#EFEEEA]/90">A clear path forward to transform your business</span>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <ConsultationCalendar />
          </div>
        </div>
      </div>
    </div>
  );
} 