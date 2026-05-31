import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryDetailClient } from "@/src/features/categories/category-detail-client";
import categoriesData from "@/src/mock/categories.json";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categoriesData.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categoriesData.find((c) => c.slug === slug);
  if (!category) return {};
  return { title: category.name, description: category.description };
}

export default async function CategoryDetailPage({ params }: Props) {
  const { slug } = await params;
  const category = categoriesData.find((c) => c.slug === slug);
  if (!category) notFound();
  return <CategoryDetailClient slug={slug} />;
}
