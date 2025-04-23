import { LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const footerNavs = [
  {
    label: "Company",
    items: [
      {
        href: "/about",
        name: "About Altiverr",
      },
      {
        href: "/framework",
        name: "Our Framework",
      },
      {
        href: "/services",
        name: "Services",
      },
    ],
  },

  {
    label: "Resources",
    items: [
      {
        href: "/case-studies",
        name: "Case Studies",
      },
      {
        href: "/blog",
        name: "Blog",
      },
      {
        href: "/faq",
        name: "FAQ",
      },
    ],
  },
  {
    label: "Legal",
    items: [
      {
        href: "/terms",
        name: "Terms of Service",
      },
      {
        href: "/privacy",
        name: "Privacy Policy",
      },
    ],
  },
];

const footerSocials = [
  {
    href: "https://www.linkedin.com/company/altiverr",
    name: "LinkedIn",
    icon: <LinkedInLogoIcon className="h-5 w-5" />,
  },
  {
    href: "https://twitter.com/altiverr",
    name: "Twitter",
    icon: <TwitterLogoIcon className="h-5 w-5" />,
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="md:flex md:justify-between px-8 p-4 py-16 sm:pb-16 gap-4">
          <div className="mb-12 flex-col flex gap-4">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/logo.png"
                className="h-10 w-auto"
                alt="Altiverr Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Altiverr
              </span>
            </Link>
            <p className="max-w-xs text-gray-600 dark:text-gray-300">
              Elevating Human Potential Through Intelligent AI Collaboration
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-3">
            {footerNavs.map((nav) => (
              <div key={nav.label}>
                <h2 className="mb-6 text-sm tracking-tighter font-medium text-gray-900 uppercase dark:text-white">
                  {nav.label}
                </h2>
                <ul className="gap-2 grid">
                  {nav.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 duration-200 font-medium text-sm"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row sm:flex sm:items-center sm:justify-between py-6 px-8 gap-4">
            <div className="flex space-x-5 sm:justify-center sm:mt-0">
              {footerSocials.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  {social.icon}
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © {new Date().getFullYear()}{" "}
              <Link href="/" className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                Altiverr LLC
              </Link>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
