import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Altiverr",
  description: "Learn about the terms and conditions governing your use of Altiverr's website and services.",
};

export default function TermsOfServicePage() {
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-[#EFEEEA]">Terms of Service</h1>
      <div className="bg-[#273F4F]/30 backdrop-blur-sm rounded-xl p-8 md:p-10 shadow-lg border border-[#273F4F]/50">
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-[#EFEEEA]/80">Effective Date: {today}</p>
          
          <p className="font-medium text-[#EFEEEA] mt-6">
            Altiverr LLC<br />
            734 E 2nd Ave, Durango, CO 81301<br />
            info@altiverr.com
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#FE7743]">1. Overview</h2>
          <p className="text-[#EFEEEA]/80">
            These Terms of Service ("Terms") govern your access to and use of the Altiverr LLC website (www.altiverr.com) and any services offered by Altiverr LLC ("Altiverr," "we," or "us"). By using our website or engaging our services, you agree to be bound by these Terms.
          </p>
          <p className="text-[#EFEEEA]/80 mt-4">
            If you do not agree with any part of these Terms, please do not use the website or our services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#FE7743]">2. Website Use (Terms of Use)</h2>
          <h3 className="text-xl font-medium mt-6 mb-3 text-[#EFEEEA]">a. Acceptable Use</h3>
          <p className="text-[#EFEEEA]/80">
            You may use the Site solely for lawful purposes. You agree not to:
          </p>
          <ul className="list-disc pl-6 text-[#EFEEEA]/80 mt-2">
            <li className="mb-2">Interfere with or disrupt the website or its security.</li>
            <li className="mb-2">Attempt to gain unauthorized access to our systems or data.</li>
            <li>Use our content for commercial purposes without permission.</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3 text-[#EFEEEA]">b. Intellectual Property</h3>
          <p className="text-[#EFEEEA]/80">
            All content on the Site—including text, graphics, design elements, and software—is owned by Altiverr LLC or its licensors and is protected by applicable intellectual property laws. You may not copy, reproduce, or distribute any content without our written permission.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#FE7743]">3. Services (Terms of Service)</h2>
          <h3 className="text-xl font-medium mt-6 mb-3 text-[#EFEEEA]">a. Description of Services</h3>
          <p className="text-[#EFEEEA]/80">
            Altiverr provides business automation, systems integration, audits, and consulting services for small and mid-sized businesses. Deliverables, pricing, and scope of work are determined by individual client agreements or proposals.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-3 text-[#EFEEEA]">b. Payment Terms</h3>
          <p className="text-[#EFEEEA]/80">
            Unless otherwise agreed, all fees are due in full before work begins. Late payments may result in suspension of services. Payment methods and terms are outlined in each client agreement.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-3 text-[#EFEEEA]">c. Client Responsibilities</h3>
          <p className="text-[#EFEEEA]/80">
            Clients are responsible for providing accurate information, timely feedback, and access to relevant systems and tools to allow Altiverr to deliver services effectively.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-3 text-[#EFEEEA]">d. No Guarantee of Outcomes</h3>
          <p className="text-[#EFEEEA]/80">
            While we aim to improve operational efficiency, Altiverr makes no guarantees regarding specific outcomes, revenue increases, or performance improvements. Results may vary based on implementation and external factors.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-3 text-[#EFEEEA]">e. Ownership & Licensing</h3>
          <p className="text-[#EFEEEA]/80">
            Unless otherwise stated, clients retain full ownership of their data. Altiverr retains ownership of proprietary automation frameworks, templates, and intellectual property provided during services unless explicitly assigned or licensed in writing.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#FE7743]">4. Disclaimers</h2>
          <p className="text-[#EFEEEA]/80">
            Altiverr provides the website and services "as is" and disclaims all warranties, express or implied. We are not liable for any damages arising from use of the site or reliance on our services, including but not limited to data loss, operational errors, or service interruptions.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#FE7743]">5. Privacy</h2>
          <p className="text-[#EFEEEA]/80">
            By using our site or booking a consultation, you agree to our <Link href="/privacy" className="text-[#FE7743] hover:underline">Privacy Policy</Link>, which outlines how we collect and use personal information through tools such as Calendly and Google Analytics.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#FE7743]">6. Third-Party Tools</h2>
          <p className="text-[#EFEEEA]/80">
            Our services may integrate with or link to third-party tools (e.g., Calendly, Slack, Google services). Use of these tools is governed by their respective terms and privacy policies. Altiverr is not responsible for their functionality, data handling, or uptime.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#FE7743]">7. Governing Law</h2>
          <p className="text-[#EFEEEA]/80">
            These Terms are governed by the laws of the State of Colorado, USA. Any disputes arising under these Terms will be resolved in the state or federal courts located in La Plata County, Colorado.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#FE7743]">8. Modifications</h2>
          <p className="text-[#EFEEEA]/80">
            We may update these Terms at any time. Changes will be posted on this page with a new effective date. Continued use of our site or services after changes take effect constitutes your acceptance of the updated Terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#FE7743]">9. Contact</h2>
          <p className="text-[#EFEEEA]/80">
            For questions about these Terms, please contact us at:<br />
            📧 info@altiverr.com
          </p>
        </div>
      </div>
    </div>
  );
} 