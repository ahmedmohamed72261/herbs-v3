import type { Category, ApiResponse } from "@/src/shared/types";
import categoriesData from "@/src/mock/categories.json";

export const categoryService = {
  async getAll(): Promise<ApiResponse<Category[]>> {
    return { success: true, data: categoriesData as Category[], timestamp: new Date().toISOString() };
  },

  async getBySlug(slug: string): Promise<ApiResponse<Category | null>> {
    const category = (categoriesData as Category[]).find((c) => c.slug === slug);
    return { success: true, data: category ?? null, timestamp: new Date().toISOString() };
  },
};
