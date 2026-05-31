import type { Metadata } from "next";
import { CategoriesPageClient } from "@/src/features/categories/categories-page-client";

export const metadata: Metadata = {
  title: "Categories",
  description: "Explore our product categories including medicinal herbs, botanical extracts, essential oils, spices, and specialty ingredients.",
};

export default function CategoriesPage() {
  return <CategoriesPageClient />;
}
