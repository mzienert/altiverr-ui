import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Altiverr | Our Story",
  description: "Learn about Altiverr's mission, vision, and the team behind our success",
};

export default async function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">About Altiverr</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-6">
            Discover the story behind Altiverr and our commitment to transforming businesses through innovative solutions.
          </p>
          {/* Add more content sections here */}
        </div>
      </div>
    </main>
  );
} 