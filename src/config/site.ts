export const siteConfig = {
  name: "Premium Global Botanical Platform",
  nameAr: "منصة النباتات العالمية الممتازة",
  shortName: "PGBP",
  shortNameAr: "م.ن.ع.م",
  tagline: "Premium Raw Materials & Medicinal Herbs",
  taglineAr: "مواد خام ممتازة وأعشاب طبية",
  description:
    "Global leader in sourcing, processing, and exporting premium raw materials and medicinal herbs. Serving pharmaceutical, nutraceutical, and cosmeceutical industries worldwide.",
  descriptionAr:
    "رائد عالمي في توريد وتجهيز وتصدير المواد الخام الممتازة والأعشاب الطبية. نخدم الصناعات الدوائية والغذائية والتجميلية في جميع أنحاء العالم.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://premiumbotanical.com",
  locale: "en_US",
  contact: {
    email: "info@premiumbotanical.com",
    phone: "+1 (555) 123-4567",
    address: "123 Herbal Valley Drive, Suite 200, New York, NY 10001, USA",
    addressAr: "123 هيربال فالي درايف، جناح 200، نيويورك، نيويورك 10001، الولايات المتحدة",
  },
  social: {
    linkedin: "https://linkedin.com/company/premiumbotanical",
    instagram: "https://instagram.com/premiumbotanical",
  },
  navLinks: [
    { label: "Home", labelAr: "الرئيسية", href: "/" },
    { label: "Products", labelAr: "المنتجات", href: "/products" },
    { label: "Categories", labelAr: "التصنيفات", href: "/categories" },
    { label: "Industries", labelAr: "الصناعات", href: "/industries" },
    { label: "Certificates", labelAr: "الشهادات", href: "/certificates" },
    { label: "Team", labelAr: "الفريق", href: "/team" },
    { label: "Contact", labelAr: "اتصل بنا", href: "/contact" },
  ],
  stats: {
    countries: { value: "45+", label: "Countries Served", labelAr: "الدول التي نخدمها" },
    products: { value: "250+", label: "Premium Products", labelAr: "منتج ممتاز" },
    experience: { value: "18+", label: "Years Experience", labelAr: "سنوات خبرة" },
    partners: { value: "600+", label: "Global Partners", labelAr: "شريك عالمي" },
  },
} as const;
