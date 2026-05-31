"use client";

import { motion } from "framer-motion";
import { PageHeader, SectionWrapper, GlassCard } from "@/src/shared/ui";
import { staggerContainer, fadeUp } from "@/src/shared/animations";
import { useCertificates } from "@/src/shared/lib/query/use-certificates";
import { useLanguage } from "@/src/shared/providers/i18n";
import { useTranslation } from "react-i18next";

export function CertificatesPageClient() {
  const { data, isLoading } = useCertificates();
  const { lang } = useLanguage();
  const { t } = useTranslation();
  const certificates = data?.data ?? [];

  return (
    <>
      <PageHeader
        title={t("certificates.title")}
        description={t("certificates.desc")}
        className="pt-32"
        badge={t("certificates.title")}
      />

      <SectionWrapper>
        {isLoading ? (
          <div className="grid md:grid-cols-2 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-border skeleton h-48" />
            ))}
          </div>
        ) : (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {certificates.map((cert) => (
              <GlassCard key={cert.id}>
                  <div className="flex items-start gap-6">
                    <div className="shrink-0 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="w-full h-full object-contain p-2"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-charcoal mb-1">
                        {lang === "ar" ? cert.nameAr : cert.name}
                      </h3>
                      <p className="text-sm text-sage mb-4">
                        {lang === "ar" ? cert.issuingBodyAr : cert.issuingBody}
                      </p>
                      <p className="text-charcoal-light leading-relaxed">
                        {lang === "ar" ? cert.descriptionAr : cert.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              ))}
          </motion.div>
        )}
      </SectionWrapper>
    </>
  );
}
