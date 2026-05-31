"use client";

import { useQuery } from "@tanstack/react-query";
import { teamService } from "@/src/shared/services";
import { STALE_TIMES } from "@/src/shared/constants";

export function useTeam() {
  return useQuery({
    queryKey: ["team"],
    queryFn: () => teamService.getAll(),
    staleTime: STALE_TIMES.team,
  });
}
