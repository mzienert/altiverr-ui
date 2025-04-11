import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Altiverr",
  description: "Get in touch with Altiverr to discuss your business transformation needs",
};

export default async function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-6">
            Ready to transform your business? Get in touch with our team to discuss your needs.
          </p>
          {/* Add contact form or contact information here */}
        </div>
      </div>
    </main>
  );
} 