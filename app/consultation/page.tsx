import { Metadata } from "next";
import ConsultationCalendar from "./consultation-calendar";

export const metadata: Metadata = {
  title: "Book a Consultation | Altiverr",
  description: "Schedule a free consultation with Altiverr to discuss your business transformation needs",
};

export default function ConsultationPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Book Your Free Consultation</h1>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Take the first step towards transforming your business operations. Schedule a 30-minute
            consultation to discuss your unique challenges and how we can help you implement
            effective systems.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-semibold mb-4">What to Expect</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center bg-primary/10 text-primary rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>A deep dive into your current business systems</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center bg-primary/10 text-primary rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Identification of key bottlenecks and inefficiencies</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center bg-primary/10 text-primary rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Strategic recommendations for systemization</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center bg-primary/10 text-primary rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>A clear path forward to transform your business</span>
                </li>
              </ul>
            </div>
            
            <div className="md:col-span-2">
              <ConsultationCalendar />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 