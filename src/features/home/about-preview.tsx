"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Trees, TestTube } from "lucide-react";
import { SectionWrapper, Button } from "@/src/shared/ui";
import { staggerContainer, fadeUp } from "@/src/shared/animations";
import { useLanguage } from "@/src/shared/providers/i18n";

const highlightsEn = [
  {
    icon: Shield,
    title: "Certified Quality",
    description: "Every batch undergoes rigorous testing. ISO 22000, Organic EU/USDA, GMP certified facilities with full traceability from farm to shipment.",
  },
  {
    icon: Trees,
    title: "Ethical & Sustainable Sourcing",
    description: "Direct relationships with farming cooperatives across 30+ countries. Fair Trade certified supply chains supporting local communities.",
  },
  {
    icon: TestTube,
    title: "Scientific Excellence",
    description: "In-house R&D lab with HPLC, GC/MS, and microbiological analysis. Full specification documentation and regulatory compliance support.",
  },
];

const highlightsAr = [
  {
    icon: Shield,
    title: "جودة معتمدة",
    description: "كل دفعة تخضع لاختبارات صارمة. مرافق معتمدة ISO 22000 وعضوي EU/USDA وممارسات التصنيع الجيد مع تتبع كامل من المزرعة إلى الشحنة.",
  },
  {
    icon: Trees,
    title: "توريد أخلاقي ومستدام",
    description: "علاقات مباشرة مع التعاونيات الزراعية في أكثر من 30 دولة. سلاسل توريد معتمدة بالتجارة العادلة تدعم المجتمعات المحلية.",
  },
  {
    icon: TestTube,
    title: "تميز علمي",
    description: "مختبر بحث وتطوير داخلي مع تحليل HPLC و GC/MS والميكروبيولوجيا. وثائق مواصفات كاملة ودعم الامتثال التنظيمي.",
  },
];

export function AboutPreview() {
  const { lang } = useLanguage();
  const highlights = lang === "ar" ? highlightsAr : highlightsEn;

  return (
    <SectionWrapper>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
            {lang === "ar" ? "من نحن" : "About Us"}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-charcoal mb-6">
            {lang === "ar" ? "شريكك الموثوق في توريد النباتات" : "Your Trusted Partner in Botanical Sourcing"}
          </h2>
          <p className="text-charcoal-light leading-relaxed mb-8">
            {lang === "ar"
              ? "مع أكثر من 18 عامًا من الخبرة، نربط الصناعات العالمية بأفضل المواد النباتية الخام في العالم. تضمن سلسلة التوريد المتكاملة لدينا جودة لا مثيل لها من المزارع المستدامة إلى باب منشأتك."
              : "With over 18 years of expertise, we connect global industries with the world's finest raw botanical materials. Our vertically integrated supply chain ensures uncompromising quality from sustainable farms to your doorstep."}
          </p>

          <div className="space-y-6">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} variants={fadeUp} className="flex gap-4 group">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-charcoal mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-charcoal-light">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/team">
              <Button variant="outline" size="lg">
                {lang === "ar" ? "قابل فريقنا" : "Meet Our Team"}
                <ArrowRight className="h-5 w-5 rtl-flip" />
              </Button>
            </Link>
            <Link href="/industries">
              <Button variant="ghost" size="lg">
                {lang === "ar" ? "الصناعات التي نخدمها" : "Industries We Serve"}
                <ArrowRight className="h-5 w-5 rtl-flip" />
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="hidden lg:block"
        >
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden glass shadow-glass">
              <img
                src="/about-person.jpg"
                alt="Premium botanical sourcing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-3xl overflow-hidden glass shadow-glass">
              <img
                src="/about2.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full overflow-hidden glass shadow-glass">
              <img
                src="/seeds-img.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
