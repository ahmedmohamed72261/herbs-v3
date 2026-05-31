"use client";

import { useQuery } from "@tanstack/react-query";
import { productService } from "@/src/shared/services";
import { STALE_TIMES } from "@/src/shared/constants";

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => productService.getAll(),
    staleTime: STALE_TIMES.products,
  });
}

export function useProduct(slug: string) {
  return useQuery({
    queryKey: ["products", slug],
    queryFn: () => productService.getBySlug(slug),
    staleTime: STALE_TIMES.products,
    enabled: !!slug,
  });
}

export function useProductsByCategory(categorySlug: string) {
  return useQuery({
    queryKey: ["products", "category", categorySlug],
    queryFn: () => productService.getByCategory(categorySlug),
    staleTime: STALE_TIMES.products,
    enabled: !!categorySlug,
  });
}

export function useProductsByIndustry(industryId: string) {
  return useQuery({
    queryKey: ["products", "industry", industryId],
    queryFn: () => productService.getByIndustry(industryId),
    staleTime: STALE_TIMES.products,
    enabled: !!industryId,
  });
}

export function useFeaturedProducts() {
  return useQuery({
    queryKey: ["products", "featured"],
    queryFn: () => productService.getFeatured(),
    staleTime: STALE_TIMES.products,
  });
}
