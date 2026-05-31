"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionWrapper, Button, GlassCard } from "@/src/shared/ui";
import { staggerContainer, fadeUp } from "@/src/shared/animations";
import { useFeaturedProducts } from "@/src/shared/lib/query/use-products";
import { cn } from "@/src/shared/utils/cn";
import { useLanguage } from "@/src/shared/providers/i18n";

const statusColors = {
  available: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  seasonal: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  limited: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
} as const;

export function ProductGrid() {
  const { data, isLoading } = useFeaturedProducts();
  const { lang } = useLanguage();
  const products = data?.data ?? [];

  return (
    <SectionWrapper className="bg-beige/50 dark:bg-charcoal/5">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
          {lang === "ar" ? "منتجاتنا" : "Our Products"}
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-charcoal mb-4">
          {lang === "ar" ? "مجموعة نباتية ممتازة" : "Premium Botanical Selection"}
        </h2>
        <p className="text-charcoal-light max-w-2xl mx-auto">
          {lang === "ar"
            ? "مجموعة مختارة من أفضل المواد الخام والأعشاب الطبية من أكثر مناطق الزراعة شهرة في العالم."
            : "Curated collection of the finest raw materials and medicinal herbs from the world's most renowned growing regions."}
        </p>
      </motion.div>

      {isLoading ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-border p-6 skeleton h-72" />
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
          {products.map((product) => (
            <GlassCard key={product.id} className="p-0 overflow-hidden">
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
                  <h3 className="font-heading text-lg font-semibold text-charcoal mt-1 mb-2 hover:text-primary transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-charcoal-light line-clamp-2 mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs text-sage">{product.form}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-primary">
                      {lang === "ar" ? "عرض التفاصيل" : "View Details"}
                      <ArrowRight className="h-3 w-3 rtl-flip" />
                    </span>
                  </div>
                </div>
              </Link>
            </GlassCard>
          ))}
        </motion.div>
      )}

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Link href="/products">
          <Button variant="primary" size="lg">
            {lang === "ar" ? "عرض جميع المنتجات" : "View All Products"}
            <ArrowRight className="h-5 w-5 rtl-flip" />
          </Button>
        </Link>
      </motion.div>
    </SectionWrapper>
  );
}
