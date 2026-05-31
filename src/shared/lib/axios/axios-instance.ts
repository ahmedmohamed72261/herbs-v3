import axios from "axios";
import { API_BASE_URL } from "@/src/shared/constants";
import { setupInterceptors } from "./interceptors";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

setupInterceptors(axiosInstance);

export default axiosInstance;
