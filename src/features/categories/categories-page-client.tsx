"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PageHeader, SectionWrapper, GlassCard } from "@/src/shared/ui";
import { staggerContainer, fadeUp } from "@/src/shared/animations";
import { useCategories } from "@/src/shared/lib/query/use-categories";
import { useLanguage } from "@/src/shared/providers/i18n";
import { useTranslation } from "react-i18next";

export function CategoriesPageClient() {
  const { data, isLoading } = useCategories();
  const { lang } = useLanguage();
  const { t } = useTranslation();
  const categories = data?.data ?? [];

  return (
    <>
      <PageHeader
        title={t("categories.title")}
        description={t("categories.desc")}
        className="pt-32"
        badge={t("categories.title")}
      />

      <SectionWrapper>
        {isLoading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-border skeleton h-56" />
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
            {categories.map((category) => (
                <GlassCard key={category.id} className="p-0 overflow-hidden group">
                  <Link href={`/categories/${category.slug}`}>
                    <div className="aspect-[16/9] relative overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-heading text-xl font-semibold text-white mb-1">
                          {lang === "ar" ? category.nameAr : category.name}
                        </h3>
                        <p className="text-sm text-white/70">{category.productCount} {lang === "ar" ? "منتج" : "Products"}</p>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-charcoal-light line-clamp-2 mb-3">
                        {lang === "ar" ? category.descriptionAr : category.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                        {t("categories.browse")}
                        <ArrowRight className="h-4 w-4 rtl-flip" />
                      </span>
                    </div>
                  </Link>
                </GlassCard>
              ))}
          </motion.div>
        )}
      </SectionWrapper>
    </>
  );
}
