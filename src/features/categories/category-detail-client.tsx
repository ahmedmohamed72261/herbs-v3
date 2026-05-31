"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Package, ArrowRight } from "lucide-react";
import { SectionWrapper, GlassCard } from "@/src/shared/ui";
import { staggerContainer, fadeUp } from "@/src/shared/animations";
import { cn } from "@/src/shared/utils/cn";
import { useCategory } from "@/src/shared/lib/query/use-categories";
import { useProductsByCategory } from "@/src/shared/lib/query/use-products";
import { useLanguage } from "@/src/shared/providers/i18n";

interface Props {
  slug: string;
}

const statusColors = {
  available: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  seasonal: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  limited: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
} as const;

export function CategoryDetailClient({ slug }: Props) {
  const { data: categoryData } = useCategory(slug);
  const { data: productsData, isLoading } = useProductsByCategory(slug);
  const { lang } = useLanguage();
  const category = categoryData?.data;
  const products = productsData?.data ?? [];

  return (
    <>
      <SectionWrapper className="pt-32 pb-0">
        <Link
          href="/categories"
          className="inline-flex items-center gap-2 text-sm text-charcoal-light hover:text-primary transition-colors mb-8 glass px-4 py-2 rounded-xl w-fit"
        >
          <ArrowLeft className="h-4 w-4 rtl-flip" />
          {lang === "ar" ? "العودة إلى التصنيفات" : "Back to Categories"}
        </Link>
      </SectionWrapper>

      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-charcoal mb-4">
            {lang === "ar" ? category?.nameAr : category?.name}
          </h1>
          <p className="text-charcoal-light max-w-2xl text-lg leading-relaxed">
            {lang === "ar" ? category?.descriptionAr : category?.description}
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-border skeleton h-64" />
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-16">
            <Package className="h-16 w-16 mx-auto text-sage/30 mb-4" />
            <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">
              {lang === "ar" ? "لا توجد منتجات في هذا التصنيف" : "No products in this category"}
            </h3>
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
              <GlassCard key={product.id} className="p-0 overflow-hidden group">
                <Link href={`/products/${product.slug}`}>
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 via-beige to-sage/10 flex items-center justify-center relative overflow-hidden">
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
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-lg font-semibold text-charcoal mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-charcoal-light line-clamp-2 mb-4">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-xs text-sage">{product.origin}</span>
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
