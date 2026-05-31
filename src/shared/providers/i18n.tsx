"use client";

import i18next from "i18next";
import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "nav.home": "Home",
      "nav.products": "Products",
      "nav.categories": "Categories",
      "nav.industries": "Industries",
      "nav.certificates": "Certificates",
      "nav.team": "Team",
      "nav.contact": "Contact",
      "hero.tagline": "Global Sourcing. Premium Quality.",
      "hero.title": "Premium Raw Materials & Medicinal Herbs",
      "hero.subtitle": "Sourcing, processing, and exporting the world's finest raw materials and medicinal herbs. Trusted by pharmaceutical and nutraceutical leaders across 40+ countries.",
      "hero.explore": "Explore Products",
      "hero.contact": "Contact Us",
      "hero.countries": "Countries Served",
      "hero.products": "Premium Products",
      "hero.experience": "Years Experience",
      "about.title": "Your Trusted Partner in Botanical Sourcing",
      "about.desc": "With over 18 years of expertise, we connect global industries with the world's finest raw botanical materials. Our vertically integrated supply chain ensures uncompromising quality from sustainable farms to your doorstep.",
      "about.meet": "Meet Our Team",
      "stats.countries": "Countries Served",
      "stats.products": "Premium Products",
      "stats.experience": "Years Experience",
      "stats.partners": "Global Partners",
      "products.title": "Our Products",
      "products.search": "Search products...",
      "products.all": "All",
      "products.empty": "No products found",
      "products.empty.desc": "Try adjusting your search or filter criteria.",
      "products.clear": "Clear filters",
      "products.view": "View All Products",
      "products.back": "Back to Products",
      "products.inquire": "Inquire About This Product",
      "products.notfound": "Product Not Found",
      "categories.title": "Product Categories",
      "categories.desc": "Discover our comprehensive range of botanical categories.",
      "categories.browse": "Browse Category",
      "certificates.title": "Certifications & Compliance",
      "certificates.desc": "We maintain the highest industry standards through rigorous certifications.",
      "certificates.view": "View All Certifications",
      "industries.title": "Industries We Serve",
      "industries.desc": "Our premium botanical ingredients serve diverse industries worldwide.",
      "team.title": "Our Leadership Team",
      "team.desc": "Meet the experts behind our global operations.",
      "contact.title": "Contact Us",
      "contact.desc": "Ready to partner with us? Reach out to our team.",
      "contact.name": "Full Name *",
      "contact.email": "Email Address *",
      "contact.company": "Company Name *",
      "contact.phone": "Phone Number *",
      "contact.subject": "Subject *",
      "contact.message": "Message *",
      "contact.send": "Send Inquiry",
      "contact.thanks": "Thank You for Your Inquiry",
      "contact.thanks.desc": "Our team will review your message and respond within 24 hours.",
      "contact.another": "Send Another Message",
      "contact.hours": "Monday - Friday: 9:00 AM - 6:00 PM (EST)",
      "footer.quick": "Quick Links",
      "footer.categories": "Categories",
      "footer.contact": "Contact",
      "footer.rights": "All rights reserved.",
      "footer.privacy": "Privacy Policy",
      "footer.terms": "Terms of Service",
      "theme.light": "Light",
      "theme.dark": "Dark",
      "lang.en": "English",
      "lang.ar": "العربية",
    },
  },
  ar: {
    translation: {
      "nav.home": "الرئيسية",
      "nav.products": "المنتجات",
      "nav.categories": "التصنيفات",
      "nav.industries": "الصناعات",
      "nav.certificates": "الشهادات",
      "nav.team": "الفريق",
      "nav.contact": "اتصل بنا",
      "hero.tagline": "توريد عالمي. جودة ممتازة.",
      "hero.title": "مواد خام ممتازة وأعشاب طبية",
      "hero.subtitle": "نقوم بتوريد وتجهيز وتصدير أفضل المواد الخام والأعشاب الطبية في العالم. موثوقون من قبل قادة الصناعات الدوائية والغذائية في أكثر من 40 دولة.",
      "hero.explore": "استكشف المنتجات",
      "hero.contact": "اتصل بنا",
      "hero.countries": "الدول التي نخدمها",
      "hero.products": "منتج ممتاز",
      "hero.experience": "سنوات خبرة",
      "about.title": "شريكك الموثوق في توريد النباتات",
      "about.desc": "مع أكثر من 18 عامًا من الخبرة، نربط الصناعات العالمية بأفضل المواد النباتية الخام في العالم. تضمن سلسلة التوريد المتكاملة رأسياً لدينا جودة لا مثيل لها من المزارع المستدامة إلى عتبة داركم.",
      "about.meet": "قابل فريقنا",
      "stats.countries": "الدول التي نخدمها",
      "stats.products": "منتج ممتاز",
      "stats.experience": "سنوات خبرة",
      "stats.partners": "شريك عالمي",
      "products.title": "منتجاتنا",
      "products.search": "ابحث عن منتجات...",
      "products.all": "الكل",
      "products.empty": "لم يتم العثور على منتجات",
      "products.empty.desc": "حاول تعديل معايير البحث أو التصفية.",
      "products.clear": "مسح التصفية",
      "products.view": "عرض جميع المنتجات",
      "products.back": "العودة إلى المنتجات",
      "products.inquire": "استفسر عن هذا المنتج",
      "products.notfound": "المنتج غير موجود",
      "categories.title": "تصنيفات المنتجات",
      "categories.desc": "اكتشف مجموعتنا الشاملة من التصنيفات النباتية.",
      "categories.browse": "تصفح التصنيف",
      "certificates.title": "الشهادات والامتثال",
      "certificates.desc": "نحافظ على أعلى معايير الصناعة من خلال شهادات صارمة.",
      "certificates.view": "عرض جميع الشهادات",
      "industries.title": "الصناعات التي نخدمها",
      "industries.desc": "مكوناتنا النباتية الممتازة تخدم صناعات متنوعة في جميع أنحاء العالم.",
      "team.title": "فريق القيادة لدينا",
      "team.desc": "تعرف على الخبراء الذين يقودون عملياتنا العالمية.",
      "contact.title": "اتصل بنا",
      "contact.desc": "مستعد للشراكة معنا؟ تواصل مع فريقنا.",
      "contact.name": "الاسم الكامل *",
      "contact.email": "البريد الإلكتروني *",
      "contact.company": "اسم الشركة *",
      "contact.phone": "رقم الهاتف *",
      "contact.subject": "الموضوع *",
      "contact.message": "الرسالة *",
      "contact.send": "إرسال الاستفسار",
      "contact.thanks": "شكراً لاستفسارك",
      "contact.thanks.desc": "سيراجع فريقنا رسالتك وسيرد خلال 24 ساعة.",
      "contact.another": "إرسال رسالة أخرى",
      "contact.hours": "الإثنين - الجمعة: 9:00 ص - 6:00 م (التوقيت الشرقي)",
      "footer.quick": "روابط سريعة",
      "footer.categories": "التصنيفات",
      "footer.contact": "اتصل بنا",
      "footer.rights": "جميع الحقوق محفوظة.",
      "footer.privacy": "سياسة الخصوصية",
      "footer.terms": "شروط الخدمة",
      "theme.light": "فاتح",
      "theme.dark": "داكن",
      "lang.en": "English",
      "lang.ar": "العربية",
    },
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

interface LanguageContextType {
  lang: "en" | "ar";
  setLang: (lang: "en" | "ar") => void;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<"en" | "ar">("en");

  const setLang = (l: "en" | "ar") => {
    setLangState(l);
    i18next.changeLanguage(l);
    document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = l;
    localStorage.setItem("lang", l);
  };

  useEffect(() => {
    const stored = localStorage.getItem("lang") as "en" | "ar" | null;
    if (stored) setLang(stored);
  }, []);

  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ lang, setLang, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}

export default i18next;
