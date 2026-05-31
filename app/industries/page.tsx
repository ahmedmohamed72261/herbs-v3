import type { Metadata } from "next";
import { IndustriesPageClient } from "@/src/features/industries/industries-page-client";

export const metadata: Metadata = {
  title: "Industries",
  description: "Our premium botanical ingredients serve diverse industries worldwide including pharmaceutical, nutraceutical, cosmeceutical, food & beverage, aromatherapy, and flavor & fragrance.",
};

export default function IndustriesPage() {
  return <IndustriesPageClient />;
}
