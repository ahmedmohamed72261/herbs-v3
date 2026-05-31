import type { AxiosError } from "axios";

export interface ApiError {
  status: number | undefined;
  message: string;
  code: string;
}

export function errorHandler(error: AxiosError): ApiError {
  if (error.response) {
    const { status, data } = error.response;
    const message =
      (data as { message?: string })?.message || error.message;
    console.error(`[API Error ${status}]:`, message);
    return { status, message, code: `HTTP_${status}` };
  }

  if (error.request) {
    console.error("[API Error] No response received:", error.message);
    return { status: undefined, message: "Network error. Please check your connection.", code: "NETWORK_ERROR" };
  }

  console.error("[API Error] Request setup failed:", error.message);
  return { status: undefined, message: error.message, code: "REQUEST_ERROR" };
}
