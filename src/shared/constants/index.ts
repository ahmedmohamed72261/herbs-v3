export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://api.premiumbotanical.com/v1";

export const STALE_TIMES = {
  products: 1000 * 60 * 5,
  categories: 1000 * 60 * 10,
  certificates: 1000 * 60 * 30,
  team: 1000 * 60 * 30,
  industries: 1000 * 60 * 10,
} as const;

export const PAGINATION = {
  defaultPageSize: 12,
  maxPageSize: 50,
} as const;

export const ROUTES = {
  home: "/",
  products: "/products",
  productDetail: (slug: string) => `/products/${slug}`,
  categories: "/categories",
  categoryDetail: (slug: string) => `/categories/${slug}`,
  certificates: "/certificates",
  team: "/team",
  contact: "/contact",
  industries: "/industries",
  industryDetail: (slug: string) => `/industries/${slug}`,
} as const;
