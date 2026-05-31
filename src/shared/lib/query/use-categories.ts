"use client";

import { useQuery } from "@tanstack/react-query";
import { categoryService } from "@/src/shared/services";
import { STALE_TIMES } from "@/src/shared/constants";

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => categoryService.getAll(),
    staleTime: STALE_TIMES.categories,
  });
}

export function useCategory(slug: string) {
  return useQuery({
    queryKey: ["categories", slug],
    queryFn: () => categoryService.getBySlug(slug),
    staleTime: STALE_TIMES.categories,
    enabled: !!slug,
  });
}
