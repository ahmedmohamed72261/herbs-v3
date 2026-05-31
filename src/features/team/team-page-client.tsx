"use client";

import { motion } from "framer-motion";
import { Mail, User } from "lucide-react";
import { PageHeader, SectionWrapper, GlassCard } from "@/src/shared/ui";
import { staggerContainer, fadeUp } from "@/src/shared/animations";
import { useTeam } from "@/src/shared/lib/query/use-team";
import { useLanguage } from "@/src/shared/providers/i18n";
import { useTranslation } from "react-i18next";

export function TeamPageClient() {
  const { data, isLoading } = useTeam();
  const { lang } = useLanguage();
  const { t } = useTranslation();
  const members = data?.data ?? [];

  return (
    <>
      <PageHeader
        title={t("team.title")}
        description={t("team.desc")}
        className="pt-32"
        badge={t("team.title")}
      />

      <SectionWrapper>
        {isLoading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-border skeleton h-80" />
            ))}
          </div>
        ) : (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {members.map((member) => (
              <GlassCard key={member.id} className="group">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/5 via-beige to-sage/10 flex items-center justify-center mb-5 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-heading text-lg font-semibold text-charcoal mb-1 group-hover:text-primary transition-colors">
                  {lang === "ar" ? member.nameAr : member.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  {lang === "ar" ? member.roleAr : member.role}
                </p>
                <p className="text-sm text-charcoal-light line-clamp-3 mb-4">
                  {lang === "ar" ? member.bioAr : member.bio}
                </p>
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-2 text-sm text-charcoal-light hover:text-primary transition-colors glass px-3 py-2 rounded-xl w-full"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  <span className="truncate">{member.email}</span>
                </a>
              </GlassCard>
            ))}
          </motion.div>
        )}
      </SectionWrapper>
    </>
  );
}
