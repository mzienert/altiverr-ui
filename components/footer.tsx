'use client';

import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

interface NavItem {
  href: string;
  name: string;
  disabled?: boolean;
}

export default function Footer() {
  const footerNavs = [
    {
      label: "COMPANY",
      items: [
        { href: "/about", name: "About Altiverr" },
        { href: "/framework", name: "Our Framework" },
        { href: "/services", name: "Services" },
      ] as NavItem[],
    },
    {
      label: "RESOURCES",
      items: [
        { href: "#", name: "Case Studies", disabled: true },
        { href: "#", name: "Blog", disabled: true },
        { href: "#", name: "FAQ", disabled: true },
      ] as NavItem[],
    },
    {
      label: "LEGAL",
      items: [
        { href: "/terms", name: "Terms of Service" },
        { href: "/privacy", name: "Privacy Policy" },
      ] as NavItem[],
    },
  ];

  return (
    <footer className="bg-black w-full relative z-10">
      <div className="w-full">
        <div className="flex flex-col items-center justify-center pt-4 pb-2">
          <div className="mb-2">
            <Link href="/">
              <img src="/logo.png" alt="Altiverr Logo" className="h-24 w-auto" />
            </Link>
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
                    {item.disabled ? (
                      <span className="text-[#EFEEEA]/40 text-sm cursor-not-allowed">
                        {item.name}
                        <span className="ml-1 text-[10px] text-[#EFEEEA]/30">(Coming Soon)</span>
                      </span>
                    ) : (
                      <Link href={item.href} className="text-[#EFEEEA]/70 hover:text-[#FE7743] text-sm">
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-[#EFEEEA]/10 py-4 px-4 md:px-12 lg:px-16 text-center">
          <div className="flex justify-center mb-2">
            <Link href="https://www.linkedin.com/in/matthew-zienert-7110b044/" className="text-[#EFEEEA]/70 hover:text-[#FE7743]">
              <LinkedInLogoIcon className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
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