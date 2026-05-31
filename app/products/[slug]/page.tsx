import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailClient } from "@/src/features/products/product-detail-client";
import productsData from "@/src/mock/products.json";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return productsData.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);
  if (!product) return {};
  return { title: product.name, description: product.description };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);
  if (!product) notFound();
  return <ProductDetailClient slug={slug} />;
}
