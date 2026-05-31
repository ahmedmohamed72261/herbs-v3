import type { ContactFormData, ApiResponse } from "@/src/shared/types";

export const contactService = {
  async submit(data: ContactFormData): Promise<ApiResponse<null>> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.info("[Contact Service] Form submitted:", data);
    return { success: true, data: null, message: "Thank you for your inquiry. Our team will respond within 24 hours.", timestamp: new Date().toISOString() };
  },
};
