"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/src/shared/ui";
import { siteConfig } from "@/src/config/site";
import { useLanguage } from "@/src/shared/providers/i18n";

export function Hero() {
  const { t } = useTranslation();
  const { lang } = useLanguage();

  const stats = siteConfig.stats;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-beige via-warm-white to-beige/50 dark:from-charcoal dark:via-warm-white/5 dark:to-charcoal" />
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary/5 to-sage/5 blur-3xl pointer-events-none" />

      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gold/5 blur-2xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-primary/5 blur-2xl pointer-events-none" />

      <div className="container-main relative z-10 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mb-8"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-primary font-medium">{t("hero.tagline")}</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-semibold leading-[1.05] mb-6">
              <span className="text-charcoal">{t("hero.title")}</span>
            </h1>

            <p className="text-lg md:text-xl text-charcoal-light leading-relaxed mb-10 max-w-xl">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/products">
                <Button variant="primary" size="lg">
                  {t("hero.explore")}
                  <ArrowRight className="h-5 w-5 rtl-flip" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  {t("hero.contact")}
                </Button>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex items-center gap-8 mt-12 pt-8 border-t border-border"
            >
              <div>
                <p className="text-2xl font-heading font-semibold gradient-text">
                  {stats.countries.value}
                </p>
                <p className="text-sm text-charcoal-light">
                  {lang === "ar" ? stats.countries.labelAr : stats.countries.label}
                </p>
              </div>
              <div>
                <p className="text-2xl font-heading font-semibold gradient-text">
                  {stats.products.value}
                </p>
                <p className="text-sm text-charcoal-light">
                  {lang === "ar" ? stats.products.labelAr : stats.products.label}
                </p>
              </div>
              <div>
                <p className="text-2xl font-heading font-semibold gradient-text">
                  {stats.experience.value}
                </p>
                <p className="text-sm text-charcoal-light">
                  {lang === "ar" ? stats.experience.labelAr : stats.experience.label}
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <div className="w-[420px] h-[420px] rounded-3xl overflow-hidden glass shadow-glass">
                <img
                  src="/slide/hero0.jpg"
                  alt="Premium botanical ingredients"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              </div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-2 -right-2 w-28 h-28 rounded-2xl glass shadow-glass overflow-hidden"
              >
                <img
                  src="/products/Marjoram.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-3 -left-3 w-36 h-36 rounded-full glass shadow-glass overflow-hidden"
              >
                <img
                  src="/products/Laurel.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
