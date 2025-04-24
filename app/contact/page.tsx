import { Metadata } from "next";
import CalendlyPopupButton from "@/components/calendly/CalendlyPopupButton";

export const metadata: Metadata = {
  title: "Contact Us | Altiverr",
  description: "Get in touch with Altiverr to discuss your business transformation needs",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-semibold mb-6">Schedule a Consultation</h2>
            <p className="text-lg mb-6">
              Ready to transform your business? Book a free 30-minute consultation with our team to discuss your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <CalendlyPopupButton 
                text="Book Your Free Consultation" 
                source="contact_page"
                campaign="consultation"
              />
              <a href="/consultation" className="text-primary hover:underline">
                Or view our full calendar
              </a>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <p className="text-lg mb-6">
              Have questions or want to learn more about our services? Reach out to us directly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium mb-3">Email</h3>
                <a href="mailto:info@altiverr.com" className="text-primary hover:underline">
                  info@altiverr.com
                </a>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">Phone</h3>
                <a href="tel:+1234567890" className="text-primary hover:underline">
                  (123) 456-7890
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 