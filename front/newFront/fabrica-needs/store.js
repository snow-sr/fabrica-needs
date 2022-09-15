import { configureStore } from "@reduxjs/toolkit";
import needsReducer from "./slices/needsSlice";

export const store = configureStore({
  reducer: { needs: needsReducer },
});
