import { Metadata } from "next";
import CalendlyPopupButton from "@/components/calendly/CalendlyPopupButton";

export const metadata: Metadata = {
  title: "Contact Us | Altiverr",
  description: "Get in touch with Altiverr to discuss your business transformation needs",
};

export default function ContactPage() {
  return (
    <div className="px-4 mx-auto max-w-7xl py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#EFEEEA] tracking-tight">
        Contact <span className="text-[#FE7743]">Us</span>
      </h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#273F4F]/30 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#273F4F]/50 mb-10">
          <h2 className="text-2xl font-semibold mb-6 text-[#EFEEEA]">Schedule a Consultation</h2>
          <p className="text-lg mb-6 text-[#EFEEEA]/80 leading-relaxed">
            Ready to transform your business? Book a free 30-minute consultation with our team to discuss your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <CalendlyPopupButton 
              text="Book Your Free Consultation" 
              source="contact_page"
              campaign="consultation"
              className="py-3 px-6 bg-[#FE7743] hover:bg-[#FE7743]/90 text-black font-medium rounded-full transition-all duration-300 shadow-lg"
            />
            <a href="/consultation" className="text-[#EFEEEA] hover:text-[#FE7743] hover:underline transition-colors duration-200">
              Or view our full calendar
            </a>
          </div>
        </div>
        
        <div className="bg-[#273F4F]/30 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#273F4F]/50">
          <h2 className="text-2xl font-semibold mb-6 text-[#EFEEEA]">Get in Touch</h2>
          <p className="text-lg mb-6 text-[#EFEEEA]/80 leading-relaxed">
            Have questions or want to learn more about our services? Reach out to us directly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-3 text-[#EFEEEA]">Email</h3>
              <a href="mailto:info@altiverr.com" className="text-[#FE7743] hover:underline">
                info@altiverr.com
              </a>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3 text-[#EFEEEA]">Phone</h3>
              <a href="tel:+1234567890" className="text-[#FE7743] hover:underline">
                (123) 456-7890
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 