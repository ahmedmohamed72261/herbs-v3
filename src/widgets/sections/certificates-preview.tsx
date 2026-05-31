"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionWrapper, Button, GlassCard } from "@/src/shared/ui";
import { staggerContainer, fadeUp } from "@/src/shared/animations";
import { useCertificates } from "@/src/shared/lib/query/use-certificates";
import { useLanguage } from "@/src/shared/providers/i18n";
import { useTranslation } from "react-i18next";

export function CertificatesPreview() {
  const { data, isLoading } = useCertificates();
  const { lang } = useLanguage();
  const { t } = useTranslation();
  const certificates = data?.data ?? [];

  return (
    <SectionWrapper>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
          {t("certificates.title")}
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-charcoal mb-4">
          {t("certificates.title")}
        </h2>
        <p className="text-charcoal-light max-w-2xl mx-auto">
          {t("certificates.desc")}
        </p>
      </motion.div>

      {isLoading ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-border p-6 skeleton h-48" />
          ))}
        </div>
      ) : (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certificates.slice(0, 4).map((cert) => (
            <GlassCard key={cert.id}>
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 overflow-hidden p-2">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">
                {lang === "ar" ? cert.nameAr : cert.name}
              </h3>
              <p className="text-xs text-sage mb-3">
                {lang === "ar" ? cert.issuingBodyAr : cert.issuingBody}
              </p>
              <p className="text-sm text-charcoal-light line-clamp-3">
                {lang === "ar" ? cert.descriptionAr : cert.description}
              </p>
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
        <Link href="/certificates">
          <Button variant="outline" size="lg">
            {t("certificates.view")}
            <ArrowRight className="h-5 w-5 rtl-flip" />
          </Button>
        </Link>
      </motion.div>
    </SectionWrapper>
  );
}
