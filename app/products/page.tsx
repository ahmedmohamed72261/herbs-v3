import type { Metadata } from "next";
import { ProductsPageClient } from "@/src/features/products/products-page-client";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse our premium collection of medicinal herbs, botanical extracts, essential oils, and raw materials sourced from the world's finest growing regions.",
};

export default function ProductsPage() {
  return <ProductsPageClient />;
}
