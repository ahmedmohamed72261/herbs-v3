import type { Product, ApiResponse } from "@/src/shared/types";
import productsData from "@/src/mock/products.json";
import categoriesData from "@/src/mock/categories.json";
import industriesData from "@/src/mock/industries.json";

const categoriesMap = new Map(categoriesData.map((c) => [c.id, c]));
const industriesMap = new Map(industriesData.map((i) => [i.id, i]));

function enrichProduct(p: typeof productsData[0]): Product {
  return {
    ...p,
    category: categoriesMap.get(p.categoryId)!,
  } as unknown as Product;
}

export const productService = {
  async getAll(): Promise<ApiResponse<Product[]>> {
    const data = productsData.map(enrichProduct);
    return { success: true, data, timestamp: new Date().toISOString() };
  },

  async getBySlug(slug: string): Promise<ApiResponse<Product | null>> {
    const found = productsData.find((p) => p.slug === slug);
    return {
      success: true,
      data: found ? enrichProduct(found) : null,
      timestamp: new Date().toISOString(),
    };
  },

  async getByCategory(categorySlug: string): Promise<ApiResponse<Product[]>> {
    const category = categoriesData.find((c) => c.slug === categorySlug);
    if (!category) {
      return { success: true, data: [], timestamp: new Date().toISOString() };
    }
    const data = productsData
      .filter((p) => p.categoryId === category.id)
      .map(enrichProduct);
    return { success: true, data, timestamp: new Date().toISOString() };
  },

  async getByIndustry(industryId: string): Promise<ApiResponse<Product[]>> {
    const data = productsData
      .filter((p) => p.industryIds.includes(industryId))
      .map(enrichProduct);
    return { success: true, data, timestamp: new Date().toISOString() };
  },

  async getFeatured(): Promise<ApiResponse<Product[]>> {
    const data = productsData.slice(0, 6).map(enrichProduct);
    return { success: true, data, timestamp: new Date().toISOString() };
  },
};
