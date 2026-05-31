"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Package, Leaf, MapPin, FlaskRound, Shield, Clock, Truck, Check } from "lucide-react";
import { SectionWrapper, GlassCard } from "@/src/shared/ui";
import { staggerContainer, fadeUp } from "@/src/shared/animations";
import { cn } from "@/src/shared/utils/cn";
import { useProduct } from "@/src/shared/lib/query/use-products";
import { useLanguage } from "@/src/shared/providers/i18n";

interface Props {
  slug: string;
}

export function ProductDetailClient({ slug }: Props) {
  const { data, isLoading } = useProduct(slug);
  const { lang } = useLanguage();
  const product = data?.data;

  if (isLoading) {
    return (
      <SectionWrapper className="pt-32">
        <div className="max-w-4xl mx-auto">
          <div className="h-6 skeleton rounded w-24 mb-8" />
          <div className="aspect-[16/9] skeleton rounded-2xl mb-8" />
          <div className="h-8 skeleton rounded w-3/4 mb-4" />
          <div className="h-4 skeleton rounded w-1/2 mb-8" />
          <div className="space-y-3">
            <div className="h-4 skeleton rounded w-full" />
            <div className="h-4 skeleton rounded w-full" />
            <div className="h-4 skeleton rounded w-2/3" />
          </div>
        </div>
      </SectionWrapper>
    );
  }

  if (!product) {
    return (
      <SectionWrapper className="pt-32 text-center">
        <Package className="h-16 w-16 mx-auto text-sage/30 mb-4" />
        <h1 className="font-heading text-2xl font-semibold text-charcoal mb-4">
          {lang === "ar" ? "المنتج غير موجود" : "Product Not Found"}
        </h1>
        <Link href="/products" className="text-primary hover:underline">
          {lang === "ar" ? "العودة إلى المنتجات" : "Back to Products"}
        </Link>
      </SectionWrapper>
    );
  }

  const details = [
    { icon: MapPin, label: lang === "ar" ? "المنشأ" : "Origin", value: lang === "ar" ? product.originAr : product.origin },
    { icon: FlaskRound, label: lang === "ar" ? "الشكل" : "Form", value: lang === "ar" ? product.formAr : product.form },
    { icon: Clock, label: lang === "ar" ? "مهلة التوريد" : "Lead Time", value: product.leadTime },
    { icon: Truck, label: "MOQ", value: product.moq },
    { icon: Package, label: lang === "ar" ? "التعبئة" : "Packaging", value: lang === "ar" ? product.packagingAr : product.packaging },
  ];

  const applications = lang === "ar" ? product.applicationsAr : product.applications;

  return (
    <>
      <SectionWrapper className="pt-32 pb-0">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm text-charcoal-light hover:text-primary transition-colors mb-8 glass px-4 py-2 rounded-xl w-fit"
        >
          <ArrowLeft className="h-4 w-4 rtl-flip" />
          {lang === "ar" ? "العودة إلى المنتجات" : "Back to Products"}
        </Link>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary/5 via-beige to-sage/10 glass shadow-glass overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeUp}>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                {product.category?.name}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-charcoal mt-2 mb-3">
                {product.name}
              </h1>
              <span
                className={cn(
                  "inline-block px-3 py-1.5 rounded-lg text-xs font-medium mb-6",
                  product.status === "available" && "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
                  product.status === "seasonal" && "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
                  product.status === "limited" && "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
                )}
              >
                {product.status}
              </span>
            </motion.div>

            <motion.p variants={fadeUp} className="text-charcoal-light leading-relaxed mb-8">
              {product.description}
            </motion.p>

            <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-3 mb-8">
              {details.map((detail) => {
                const Icon = detail.icon;
                return (
                  <div key={detail.label} className="flex items-start gap-3 p-3 rounded-xl glass">
                    <Icon className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-charcoal-light">{detail.label}</p>
                      <p className="text-sm font-medium text-charcoal">{detail.value}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {applications.length > 0 && (
              <motion.div variants={fadeUp} className="mb-8">
                <h3 className="font-heading text-lg font-semibold text-charcoal mb-3">
                  {lang === "ar" ? "التطبيقات" : "Applications"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {applications.map((app) => (
                    <span
                      key={app}
                      className="px-3 py-1.5 rounded-xl text-sm bg-primary/5 text-primary border border-primary/10"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {product.specifications.length > 0 && (
              <motion.div variants={fadeUp} className="mb-8">
                <h3 className="font-heading text-lg font-semibold text-charcoal mb-3">
                  {lang === "ar" ? "المواصفات" : "Specifications"}
                </h3>
                <GlassCard className="p-4">
                  <div className="divide-y divide-border">
                    {product.specifications.map((spec) => (
                      <div key={spec.label} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                        <span className="text-sm text-charcoal-light">{spec.label}</span>
                        <span className="text-sm font-medium text-charcoal">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            )}

            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-8">
              {product.certification.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-primary/5 text-primary border border-primary/10"
                >
                  <Check className="h-3 w-3" />
                  {c}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <Link
                href={`/contact?product=${product.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-primary to-primary-light text-white hover:shadow-lg hover:shadow-primary/20 transition-all"
              >
                <Leaf className="h-5 w-5" />
                {lang === "ar" ? "استفسر عن هذا المنتج" : "Inquire About This Product"}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  );
}
