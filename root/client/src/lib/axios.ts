import axios, { AxiosHeaders } from "axios";
import store from "@/store";
import { logout } from "@/slices/authSlice";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

api.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.auth.token;

    if (!config.headers) {
      config.headers = {} as AxiosHeaders;
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    console.error("Request interceptor error:", error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.data?.message === "Token has expired") {
      store.dispatch(logout());
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

export default api;
