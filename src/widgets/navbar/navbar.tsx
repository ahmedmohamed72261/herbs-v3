"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/src/shared/utils/cn";
import { siteConfig } from "@/src/config/site";
import { ThemeToggle, LanguageToggle } from "@/src/shared/ui";
import { useLanguage } from "@/src/shared/providers/i18n";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { t } = useTranslation();
  const { lang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "glass shadow-glass" : "bg-transparent",
      )}
    >
      <nav className="container-main flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/30 transition-shadow">
            <Leaf className="h-5 w-5 text-white" />
          </div>
          <span className="font-heading text-xl font-semibold text-charcoal group-hover:text-primary transition-colors">
            {lang === "ar" ? siteConfig.shortNameAr : siteConfig.shortName}
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {siteConfig.navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                  isActive
                    ? "text-primary bg-primary/5"
                    : "text-charcoal-light hover:text-primary hover:bg-primary/5",
                )}
              >
                {lang === "ar" ? link.labelAr : link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-primary to-primary-light rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-2">
          {/* <ThemeToggle />
          <LanguageToggle /> */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-primary-light text-white text-sm font-medium hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
          >
            {t("nav.contact")}
          </Link>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          {/* <ThemeToggle />
          <LanguageToggle /> */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-xl glass text-charcoal hover:text-primary transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-glass-border overflow-hidden"
          >
            <div className="container-main py-6 flex flex-col gap-2">
              {siteConfig.navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-4 py-3 rounded-xl text-base font-medium transition-all",
                      isActive
                        ? "text-primary bg-primary/5"
                        : "text-charcoal-light hover:text-primary hover:bg-primary/5",
                    )}
                  >
                    {lang === "ar" ? link.labelAr : link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="mt-3 px-5 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-light text-white text-base font-medium text-center hover:shadow-lg hover:shadow-primary/20 transition-all"
              >
                {t("nav.contact")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
