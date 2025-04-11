"use client";

import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { AlignJustify, XIcon } from "lucide-react";
import { useCtaClick } from "@/hooks/useCtaClick";

export function useScrollY(containerRef: React.RefObject<HTMLElement>) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setScrollY(containerRef.current.scrollTop);
      } else {
        setScrollY(window.scrollY);
      }
    };

    const container = containerRef.current || window;
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [containerRef]);

  return scrollY;
}

export function StickyHeader({
  containerRef,
}: {
  containerRef?: React.RefObject<HTMLElement>;
}) {
  const scrollY = useScrollY(containerRef || useRef(null));
  const stickyNavRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();
  const [active, setActive] = useState(false);
  const handleCtaClick = useCtaClick();

  const navLinks = useMemo(
    () => [
      { id: 1, label: "Our Framework", link: "/framework" },
      { id: 2, label: "About Altiverr", link: "/about" },
      { id: 3, label: "Services", link: "/services" },
      { id: 4, label: "Contact", link: "/contact" },
    ],
    [],
  );

  return (
    <header ref={stickyNavRef} className="sticky top-0 z-50 px-6 py-4 md:px-10 xl:px-0 backdrop-blur-md">
      <nav className="relative mx-auto flex items-center justify-between max-w-7xl">
        <motion.div
          className="h-10 w-auto"
          animate={{
            y: scrollY >= 120 ? -50 : 0,
            opacity: scrollY >= 120 ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
        >
          <Link href="/">
            <img
              className="h-10"
              src="/logo.png"
              alt="Altiverr Logo"
            />
          </Link>
        </motion.div>

        <ul className="sticky left-4 right-4 top-4 z-[60] hidden items-center justify-center gap-x-5 md:flex">
          <motion.div
            initial={{ x: 0 }}
            animate={{
              boxShadow:
                scrollY >= 120
                  ? theme === "dark"
                    ? "0 0 0 1px rgba(255,255,255,.08), 0 1px 2px -1px rgba(255,255,255,.08), 0 2px 4px rgba(255,255,255,.04)"
                    : "0 0 0 1px rgba(17,24,28,.08), 0 1px 2px -1px rgba(17,24,28,.08), 0 2px 4px rgba(17,24,28,.04)"
                  : "none",
            }}
            transition={{
              ease: "linear",
              duration: 0.05,
              delay: 0.05,
            }}
            className="flex h-12 w-auto items-center justify-center overflow-hidden rounded-full px-6 py-2.5 transition-all bg-background md:p-1.5 md:py-2"
          >
            <nav className="relative h-full items-center justify-between gap-x-3.5 md:flex">
              <ul className="flex h-full flex-col justify-center gap-6 md:flex-row md:justify-start md:gap-0 lg:gap-1">
                {navLinks.map((navItem) => (
                  <li
                    key={navItem.id}
                    className="flex items-center justify-center px-[0.75rem] py-[0.375rem]"
                  >
                    <Link 
                      href={navItem.link}
                      className="transition-colors hover:text-primary"
                    >
                      {navItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: scrollY >= 120 ? "auto" : 0,
              }}
              transition={{
                ease: "linear",
                duration: 0.25,
                delay: 0.05,
              }}
              className="!hidden overflow-hidden rounded-full md:!block"
            >
              <AnimatePresence>
                {scrollY >= 120 && (
                  <motion.ul
                    initial={{ x: "125%" }}
                    animate={{ x: "0" }}
                    exit={{
                      x: "125%",
                      transition: { ease: "linear", duration: 1 },
                    }}
                    transition={{ ease: "linear", duration: 0.3 }}
                    className="shrink-0 whitespace-nowrap"
                  >
                    <li>
                      <button
                        onClick={() => handleCtaClick('header-sticky-nav')}
                        className={cn(
                          "relative inline-flex w-fit items-center justify-center gap-x-1.5 overflow-hidden rounded-full bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 px-3 py-1.5 text-white outline-none hover:scale-105 transition-transform duration-300"
                        )}
                      >
                        Schedule a Consultation
                      </button>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </ul>

        <motion.div
          className="z-[999] hidden items-center gap-x-5 md:flex"
          animate={{
            y: scrollY >= 120 ? -50 : 0,
            opacity: scrollY >= 120 ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
        >
          <button
            onClick={() => handleCtaClick('header-top-right')}
            className={cn(
              buttonVariants({ size: "default" }),
              "relative bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 text-white rounded-full px-4 py-2 hover:scale-105 transition-transform duration-300"
            )}
          >
            Schedule a Consultation
          </button>
        </motion.div>
        
        <MotionConfig transition={{ duration: 0.3, ease: "easeInOut" }}>
          <motion.button
            onClick={() => setActive((prev) => !prev)}
            animate={active ? "open" : "close"}
            className="relative flex h-8 w-8 items-center justify-center rounded-md md:hidden"
          >
            <motion.span
              style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
              className="absolute h-0.5 w-5 bg-black dark:bg-white"
              variants={{
                open: {
                  rotate: ["0deg", "0deg", "45deg"],
                  top: ["35%", "50%", "50%"],
                },
                close: {
                  rotate: ["45deg", "0deg", "0deg"],
                  top: ["50%", "50%", "35%"],
                },
              }}
              transition={{ duration: 0.3 }}
            ></motion.span>
            <motion.span
              style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
              className="absolute h-0.5 w-5 bg-black dark:bg-white"
              variants={{
                open: {
                  opacity: 0,
                },
                close: {
                  opacity: 1,
                },
              }}
            ></motion.span>
            <motion.span
              style={{ left: "50%", bottom: "30%", x: "-50%", y: "-50%" }}
              className="absolute h-0.5 w-5 bg-black dark:bg-white"
              variants={{
                open: {
                  rotate: ["0deg", "0deg", "-45deg"],
                  top: ["65%", "50%", "50%"],
                },
                close: {
                  rotate: ["-45deg", "0deg", "0deg"],
                  top: ["50%", "50%", "65%"],
                },
              }}
              transition={{ duration: 0.3 }}
            ></motion.span>
          </motion.button>
        </MotionConfig>
      </nav>
      
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <ul className="flex flex-col space-y-4 pt-4 pb-8">
              {navLinks.map((navItem) => (
                <li key={navItem.id}>
                  <Link
                    href={navItem.link}
                    className="block py-2 text-lg"
                    onClick={() => setActive(false)}
                  >
                    {navItem.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => {
                    handleCtaClick('header-mobile-menu');
                    setActive(false);
                  }}
                  className={cn(
                    buttonVariants({ size: "default" }),
                    "relative bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 text-white w-full justify-center"
                  )}
                >
                  Schedule a Consultation
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function SiteHeader() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <>
      <StickyHeader />
    </>
  );
}
