"use client";

import { useQuery } from "@tanstack/react-query";
import { certificateService } from "@/src/shared/services";
import { STALE_TIMES } from "@/src/shared/constants";

export function useCertificates() {
  return useQuery({
    queryKey: ["certificates"],
    queryFn: () => certificateService.getAll(),
    staleTime: STALE_TIMES.certificates,
  });
}
