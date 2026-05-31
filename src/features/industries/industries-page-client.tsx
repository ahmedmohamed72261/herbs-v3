"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Pill, Beaker, Sparkles, UtensilsCrossed, Heart, Wand2, ArrowRight } from "lucide-react";
import { PageHeader, SectionWrapper, GlassCard } from "@/src/shared/ui";
import { staggerContainer, fadeUp } from "@/src/shared/animations";
import { useIndustries } from "@/src/shared/lib/query/use-industries";
import { useLanguage } from "@/src/shared/providers/i18n";
import { useTranslation } from "react-i18next";

const iconMap: Record<string, React.ElementType> = {
  pill: Pill,
  capsule: Beaker,
  sparkles: Sparkles,
  "utensils-crossed": UtensilsCrossed,
  heart: Heart,
  "wand-2": Wand2,
};

export function IndustriesPageClient() {
  const { data, isLoading } = useIndustries();
  const { lang } = useLanguage();
  const { t } = useTranslation();
  const industries = data?.data ?? [];

  return (
    <>
      <PageHeader
        title={t("industries.title")}
        description={t("industries.desc")}
        className="pt-32"
        badge={t("industries.title")}
      />

      <SectionWrapper>
        {isLoading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-border skeleton h-64" />
            ))}
          </div>
        ) : (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {industries.map((industry) => {
              const Icon = iconMap[industry.icon] || Pill;
              return (
                <GlassCard key={industry.id} className="group">
                  <Link href={`/industries/${industry.slug}`}>
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-charcoal mb-2 group-hover:text-primary transition-colors">
                      {lang === "ar" ? industry.nameAr : industry.name}
                    </h3>
                    <p className="text-sm text-charcoal-light line-clamp-3 mb-5">
                      {lang === "ar" ? industry.descriptionAr : industry.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(lang === "ar" ? industry.applicationsAr : industry.applications).slice(0, 3).map((app) => (
                        <span
                          key={app}
                          className="px-2.5 py-1 rounded-lg text-xs bg-primary/5 text-primary border border-primary/10"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      {lang === "ar" ? "استكشاف" : "Explore"}
                      <ArrowRight className="h-4 w-4 rtl-flip" />
                    </span>
                  </Link>
                </GlassCard>
              );
            })}
          </motion.div>
        )}
      </SectionWrapper>
    </>
  );
}
