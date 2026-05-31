import type { Certificate, ApiResponse } from "@/src/shared/types";
import certificatesData from "@/src/mock/certificates.json";

export const certificateService = {
  async getAll(): Promise<ApiResponse<Certificate[]>> {
    return { success: true, data: certificatesData as Certificate[], timestamp: new Date().toISOString() };
  },
};
