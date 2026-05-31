"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/src/shared/ui";
import { staggerContainer, fadeUp } from "@/src/shared/animations";
import { cn } from "@/src/shared/utils/cn";
import { useLanguage } from "@/src/shared/providers/i18n";
import { siteConfig } from "@/src/config/site";
import { Leaf, Globe, Award, Users } from "lucide-react";

const iconMap = [Leaf, Globe, Award, Users];

export function StatsSection() {
  const { lang } = useLanguage();
  const stats = Object.values(siteConfig.stats);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-beige to-primary/5 dark:from-primary dark:via-primary-dark dark:to-primary" />
      <div className="absolute inset-0 bg-grid opacity-[0.05]" />
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container-main relative"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = iconMap[index];
            return (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-5 border border-white/10">
                  <Icon className="h-6 w-6 text-sage-light" />
                </div>
                <p className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-sage-light/80">
                  {lang === "ar" ? stat.labelAr : stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
