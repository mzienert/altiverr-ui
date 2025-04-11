import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Framework | Altiverr",
  description: "Learn about Altiverr's unique framework for business transformation",
};

export default async function FrameworkPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Our Framework</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-6">
            Discover how our unique framework drives business transformation and sustainable growth.
          </p>
          {/* Add more content sections here */}
        </div>
      </div>
    </main>
  );
} 