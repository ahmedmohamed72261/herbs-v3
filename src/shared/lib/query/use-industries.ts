"use client";

import { useQuery } from "@tanstack/react-query";
import { industryService } from "@/src/shared/services";
import { STALE_TIMES } from "@/src/shared/constants";

export function useIndustries() {
  return useQuery({
    queryKey: ["industries"],
    queryFn: () => industryService.getAll(),
    staleTime: STALE_TIMES.industries,
  });
}

export function useIndustry(slug: string) {
  return useQuery({
    queryKey: ["industries", slug],
    queryFn: () => industryService.getBySlug(slug),
    staleTime: STALE_TIMES.industries,
    enabled: !!slug,
  });
}
