import api from "@/lib/axios";
import { Invoice } from "../types/invoice";

export const fetchInvoices = async (): Promise<Invoice[]> => {
  const { data } = await api.get(
    `${import.meta.env.VITE_BACKEND_URL}/invoices`
  );
  return data;
};

export const fetchInvoiceById = async (id: string): Promise<Invoice> => {
  const { data } = await api.get(
    `${import.meta.env.VITE_BACKEND_URL}/invoices/${id}`
  );
  return data;
};
