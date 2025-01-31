import { Invoice } from "@/types/invoice";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InvoiceState {
  invoices: Invoice[];
}

const initialState: InvoiceState = {
  invoices: [],
};

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    addInvoice(state, action: PayloadAction<Invoice>) {
      state.invoices.push(action.payload);
    },
    removeInvoice(state, action: PayloadAction<string>) {
      state.invoices = state.invoices.filter(
        (invoice) => invoice.id !== action.payload
      );
    },
    updateInvoice(state, action: PayloadAction<Invoice>) {
      const index = state.invoices.findIndex(
        (invoice) => invoice.id === action.payload.id
      );
      if (index !== -1) {
        state.invoices[index] = action.payload;
      }
    },
  },
});

export const { addInvoice, removeInvoice, updateInvoice } =
  invoiceSlice.actions;

export const selectInvoices = (state: { invoice: InvoiceState }) =>
  state.invoice.invoices;

export default invoiceSlice.reducer;
