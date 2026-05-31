"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Package, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PageHeader, SectionWrapper, GlassCard } from "@/src/shared/ui";
import { staggerContainer, fadeUp } from "@/src/shared/animations";
import { cn } from "@/src/shared/utils/cn";
import { useProducts } from "@/src/shared/lib/query/use-products";
import { useCategories } from "@/src/shared/lib/query/use-categories";
import { useLanguage } from "@/src/shared/providers/i18n";
import { useTranslation } from "react-i18next";

const statusColors = {
  available: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  seasonal: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  limited: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
} as const;

export function ProductsPageClient() {
  const { data: productsData, isLoading } = useProducts();
  const { data: categoriesData } = useCategories();
  const { lang } = useLanguage();
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const products = productsData?.data ?? [];
  const categories = categoriesData?.data ?? [];

  const filtered = products.filter((p) => {
    const name = lang === "ar" ? p.nameAr : p.name;
    const desc = lang === "ar" ? p.descriptionAr : p.description;
    const matchesSearch =
      !search ||
      name.toLowerCase().includes(search.toLowerCase()) ||
      desc.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !activeCategory || p.category?.id === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <PageHeader
        title={t("products.title")}
        description={lang === "ar"
          ? "تصفح كتالوجنا الشامل للمكونات النباتية الممتازة. كل منتج يخضع لاختبارات صارمة ومعتمد للجودة."
          : "Browse our comprehensive catalog of premium botanical ingredients. Each product is rigorously tested and certified for quality."}
        className="pt-32"
        badge={t("products.title")}
      />

      <SectionWrapper className="pt-8">
        <div className="flex flex-col lg:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal-light" />
            <input
              type="text"
              placeholder={t("products.search")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl glass text-charcoal placeholder:text-charcoal-light/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={cn(
                "px-4 py-2.5 rounded-xl text-sm font-medium transition-all",
                !activeCategory
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "glass text-charcoal-light hover:text-primary",
              )}
            >
              {t("products.all")}
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                className={cn(
                  "px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap",
                  activeCategory === cat.id
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "glass text-charcoal-light hover:text-primary",
                )}
              >
                {lang === "ar" ? cat.nameAr : cat.name}
              </button>
            ))}
          </div>
        </div>

        {isLoading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-border skeleton h-72" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <Package className="h-16 w-16 mx-auto text-sage/30 mb-4" />
            <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">
              {t("products.empty")}
            </h3>
            <p className="text-charcoal-light">{t("products.empty.desc")}</p>
            {(search || activeCategory) && (
              <button
                onClick={() => { setSearch(""); setActiveCategory(null); }}
                className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:text-primary-dark glass px-4 py-2 rounded-xl"
              >
                <X className="h-4 w-4" />
                {t("products.clear")}
              </button>
            )}
          </div>
        ) : (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((product) => (
              <GlassCard key={product.id} className="p-0 overflow-hidden group">
                <Link href={`/products/${product.slug}`}>
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 via-beige to-sage/10 dark:from-primary/10 dark:via-charcoal dark:to-sage/5 flex items-center justify-center relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <span
                      className={cn(
                        "absolute top-4 right-4 px-3 py-1 rounded-lg text-xs font-medium backdrop-blur-sm",
                        statusColors[product.status],
                      )}
                    >
                      {product.status}
                    </span>
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-lg text-xs font-medium bg-white/80 dark:bg-charcoal/80 backdrop-blur-sm text-charcoal-light">
                      {product.origin}
                    </span>
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {product.category?.name}
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-charcoal mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-charcoal-light line-clamp-2 mb-4">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-xs text-sage">{product.form}</span>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-primary">
                        {lang === "ar" ? "التفاصيل" : "Details"}
                        <ArrowRight className="h-3 w-3 rtl-flip" />
                      </span>
                    </div>
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
