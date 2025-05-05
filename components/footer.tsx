'use client';

import { LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Footer() {
  const footerNavs = [
    {
      label: "COMPANY",
      items: [
        { href: "/about", name: "About Altiverr" },
        { href: "/framework", name: "Our Framework" },
        { href: "/services", name: "Services" },
      ],
    },
    {
      label: "RESOURCES",
      items: [
        { href: "/case-studies", name: "Case Studies" },
        { href: "/blog", name: "Blog" },
        { href: "/faq", name: "FAQ" },
      ],
    },
    {
      label: "LEGAL",
      items: [
        { href: "/terms", name: "Terms of Service" },
        { href: "/privacy", name: "Privacy Policy" },
      ],
    },
  ];

  return (
    <footer className="bg-black w-full relative z-10">
      <div className="w-full">
        <div className="flex flex-col items-center justify-center pt-8 pb-4">
          <div className="flex items-center gap-2 mb-2">
            <img src="/logo.png" alt="Altiverr Logo" className="h-6 w-auto" />
            <span className="text-xl font-semibold text-[#EFEEEA]">Altiverr</span>
          </div>
          <p className="text-[#EFEEEA]/70 text-sm">
            Elevating Human Potential Through Intelligent AI Collaboration
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 px-4 md:px-12 lg:px-16 text-center">
          {footerNavs.map((column) => (
            <div key={column.label}>
              <h3 className="text-[#EFEEEA] text-sm font-medium mb-4">{column.label}</h3>
              <ul className="space-y-3">
                {column.items.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-[#EFEEEA]/70 hover:text-[#FE7743] text-sm">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-[#EFEEEA]/10 py-4 px-4 md:px-12 lg:px-16 text-center">
          <div className="flex justify-center space-x-4 mb-2">
            <Link href="https://www.linkedin.com/company/altiverr" className="text-[#EFEEEA]/70 hover:text-[#FE7743]">
              <LinkedInLogoIcon className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://twitter.com/altiverr" className="text-[#EFEEEA]/70 hover:text-[#FE7743]">
              <TwitterLogoIcon className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
          <p className="text-[#EFEEEA]/70 text-sm">
            © {new Date().getFullYear()} Altiverr LLC. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 