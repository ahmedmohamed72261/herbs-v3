export interface Product {
  id: string;
  name: string;
  nameAr: string;
  slug: string;
  description: string;
  descriptionAr: string;
  categoryId: string;
  category?: Category;
  origin: string;
  originAr: string;
  form: string;
  formAr: string;
  certification: string[];
  industryIds: string[];
  image: string;
  gallery: string[];
  moq: string;
  packaging: string;
  packagingAr: string;
  leadTime: string;
  applications: string[];
  applicationsAr: string[];
  specifications: { label: string; value: string }[];
  status: "available" | "seasonal" | "limited";
}

export interface Category {
  id: string;
  name: string;
  nameAr: string;
  slug: string;
  description: string;
  descriptionAr: string;
  image: string;
  productCount: number;
  icon: string;
}

export interface Certificate {
  id: string;
  name: string;
  nameAr: string;
  issuingBody: string;
  issuingBodyAr: string;
  description: string;
  descriptionAr: string;
  image: string;
  badge: string;
}

export interface TeamMember {
  id: string;
  name: string;
  nameAr: string;
  role: string;
  roleAr: string;
  bio: string;
  bioAr: string;
  image: string;
  email: string;
}

export interface Industry {
  id: string;
  name: string;
  nameAr: string;
  slug: string;
  description: string;
  descriptionAr: string;
  icon: string;
  image: string;
  applications: string[];
  applicationsAr: string[];
  productIds: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  timestamp: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface NavLink {
  label: string;
  labelAr: string;
  href: string;
}
