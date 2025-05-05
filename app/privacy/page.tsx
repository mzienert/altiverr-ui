import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Altiverr",
  description: "Learn about Altiverr's privacy practices and how we protect your personal information.",
};

export default function PrivacyPolicyPage() {
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-[#EFEEEA]">Privacy Policy</h1>
      <div className="bg-[#273F4F]/30 backdrop-blur-sm rounded-xl p-8 md:p-10 shadow-lg border border-[#273F4F]/50">
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-[#EFEEEA]/80">Last Updated: {today}</p>
          
          <p className="font-medium text-[#EFEEEA] mt-6">
            Altiverr LLC<br />
            734 E 2nd Ave, Durango, CO 81301<br />
            info@altiverr.com
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#FE7743]">1. Introduction</h2>
          <p className="text-[#EFEEEA]/80">
            Altiverr LLC ("we," "our," or "us") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, and share your personal information 
            when you visit our website [www.altiverr.com].
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#FE7743]">2. What Information We Collect</h2>
          <p className="text-[#EFEEEA]/80">
            We may collect the following types of personal data:
          </p>
          <ul className="list-disc pl-6 text-[#EFEEEA]/80 mt-2">
            <li className="mb-2">
              <strong className="text-[#EFEEEA]">Contact Information</strong> (e.g., name, email) — when you schedule a consultation via Calendly.
            </li>
            <li>
              <strong className="text-[#EFEEEA]">Usage Data</strong> — via tools like Google Analytics, which help us understand how visitors interact with our site.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#FE7743]">3. How We Use Your Information</h2>
          <p className="text-[#EFEEEA]/80">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-[#EFEEEA]/80 mt-2">
            <li className="mb-2">Communicate with you about your inquiry.</li>
            <li className="mb-2">Improve our website and services.</li>
            <li>Analyze traffic and user behavior for business insights.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#FE7743]">4. Sharing of Information</h2>
          <p className="text-[#EFEEEA]/80">
            We do not sell your personal information. We may share it with trusted service providers like:
          </p>
          <ul className="list-disc pl-6 text-[#EFEEEA]/80 mt-2">
            <li className="mb-2">Calendly (for appointment scheduling)</li>
            <li>Google Analytics (for analytics and traffic reporting)</li>
          </ul>
          <p className="text-[#EFEEEA]/80 mt-4">
            These third parties process data under their own privacy policies.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#FE7743]">5. Cookies and Tracking</h2>
          <p className="text-[#EFEEEA]/80">
            We use cookies for analytics and basic functionality. You can control cookie settings through your browser.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#FE7743]">6. Data Retention</h2>
          <p className="text-[#EFEEEA]/80">
            We retain your information only as long as needed to fulfill the purposes outlined in this policy or as required by law.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#FE7743]">7. Your Rights</h2>
          <p className="text-[#EFEEEA]/80">
            Depending on your jurisdiction, you may have the right to:
          </p>
          <ul className="list-disc pl-6 text-[#EFEEEA]/80 mt-2">
            <li className="mb-2">Access or update your personal data</li>
            <li className="mb-2">Request deletion of your information</li>
            <li>Withdraw consent</li>
          </ul>
          <p className="text-[#EFEEEA]/80 mt-4">
            Please contact us at info@altiverr.com to make a request.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#FE7743]">8. Data Security</h2>
          <p className="text-[#EFEEEA]/80">
            We implement reasonable technical and organizational measures to protect your personal information.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#FE7743]">9. Children's Privacy</h2>
          <p className="text-[#EFEEEA]/80">
            Our services are not intended for children under 13. We do not knowingly collect data from minors.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#FE7743]">10. Changes to This Policy</h2>
          <p className="text-[#EFEEEA]/80">
            We may update this policy from time to time. The updated version will be posted on this page with a revised date.
          </p>
        </div>
      </div>
    </div>
  );
} 