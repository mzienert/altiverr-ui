import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Altiverr",
  description: "Explore Altiverr's comprehensive range of business transformation services",
};

export default async function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-6">
            Explore our comprehensive suite of services designed to drive your business forward.
          </p>
          {/* Add service cards or sections here */}
        </div>
      </div>
    </main>
  );
} 