import api from "@/lib/axios";
import { LoginCredentials } from "../types/auth";

interface AuthResponse {
  access_token: string;
}

export const login = async (
  credentials: LoginCredentials
): Promise<AuthResponse> => {
  try {
    const { data } = await api.post("/auth/login", credentials);
    return data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};
