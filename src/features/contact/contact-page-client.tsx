"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { PageHeader, SectionWrapper } from "@/src/shared/ui";
import { staggerContainer, fadeUp } from "@/src/shared/animations";
import { siteConfig } from "@/src/config/site";
import { useLanguage } from "@/src/shared/providers/i18n";
import { useTranslation } from "react-i18next";
import { ContactForm } from "./contact-form";

export function ContactPageClient() {
  const { lang } = useLanguage();
  const { t } = useTranslation();

  const contactInfo = [
    { icon: Mail, label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
    { icon: Phone, label: "Phone", value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone}` },
    { icon: MapPin, label: lang === "ar" ? "العنوان" : "Address", value: lang === "ar" ? siteConfig.contact.addressAr : siteConfig.contact.address },
    { icon: Clock, label: lang === "ar" ? "ساعات العمل" : "Business Hours", value: t("contact.hours") },
  ];

  return (
    <>
      <PageHeader
        title={t("contact.title")}
        description={t("contact.desc")}
        className="pt-32"
        badge={t("contact.title")}
      />

      <SectionWrapper>
        <div className="grid lg:grid-cols-5 gap-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.label} variants={fadeUp} className="flex gap-4 group">
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="pt-1">
                    <p className="text-sm font-medium text-charcoal mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-charcoal-light hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-charcoal-light">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="lg:col-span-3">
            <div className="glass-card rounded-3xl p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
