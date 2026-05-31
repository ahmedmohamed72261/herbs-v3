import type { Industry, ApiResponse } from "@/src/shared/types";
import industriesData from "@/src/mock/industries.json";

export const industryService = {
  async getAll(): Promise<ApiResponse<Industry[]>> {
    return { success: true, data: industriesData as Industry[], timestamp: new Date().toISOString() };
  },

  async getBySlug(slug: string): Promise<ApiResponse<Industry | null>> {
    const industry = (industriesData as Industry[]).find((i) => i.slug === slug);
    return { success: true, data: industry ?? null, timestamp: new Date().toISOString() };
  },
};
