import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import invoiceReducer from "./slices/invoiceSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    invoice: invoiceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
