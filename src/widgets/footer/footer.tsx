"use client";

import Link from "next/link";
import { Leaf, Mail, Phone, MapPin, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { siteConfig } from "@/src/config/site";
import { useLanguage } from "@/src/shared/providers/i18n";

export function Footer() {
  const { t } = useTranslation();
  const { lang } = useLanguage();
  const currentYear = new Date().getFullYear();

  const categoryLinks = [
    { name: t("categories.title"), nameAr: "التصنيفات", href: "/categories" },
    { name: "Medicinal Herbs", nameAr: "الأعشاب الطبية", href: "/categories/medicinal-herbs-botanicals" },
    { name: "Botanical Extracts", nameAr: "المستخلصات النباتية", href: "/categories/botanical-extracts-phytochemicals" },
    { name: "Essential Oils", nameAr: "الزيوت العطرية", href: "/categories/essential-oils-aromatics" },
    { name: "Raw Botanicals", nameAr: "النباتات الخام", href: "/categories/raw-dried-botanicals" },
  ];

  return (
    <footer className="relative bg-charcoal text-warm-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />
      <div className="relative container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="font-heading text-xl font-semibold">
                {lang === "ar" ? siteConfig.shortNameAr : siteConfig.shortName}
              </span>
            </Link>
            <p className="text-sage-light/70 text-sm leading-relaxed mb-6">
              {lang === "ar" ? siteConfig.descriptionAr : siteConfig.description}
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
                aria-label="LinkedIn"
              >
                <Globe className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
                aria-label="Instagram"
              >
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-sage-light mb-4">
              {t("footer.quick")}
            </h3>
            <ul className="space-y-3">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sage-light/60 hover:text-warm-white transition-colors"
                  >
                    {lang === "ar" ? link.labelAr : link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-sage-light mb-4">
              {t("footer.categories")}
            </h3>
            <ul className="space-y-3">
              {categoryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sage-light/60 hover:text-warm-white transition-colors"
                  >
                    {lang === "ar" ? link.nameAr : link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-sage-light mb-4">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-sage-light mt-0.5 shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-sm text-sage-light/60 hover:text-warm-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-sage-light mt-0.5 shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-sm text-sage-light/60 hover:text-warm-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-sage-light mt-0.5 shrink-0" />
                <span className="text-sm text-sage-light/60">
                  {lang === "ar" ? siteConfig.contact.addressAr : siteConfig.contact.address}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/5">
        <div className="container-main py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-sage-light/40">
            &copy; {currentYear} {siteConfig.name}. {t("footer.rights")}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-sage-light/40 hover:text-warm-white transition-colors">
              {t("footer.privacy")}
            </a>
            <a href="#" className="text-sm text-sage-light/40 hover:text-warm-white transition-colors">
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
