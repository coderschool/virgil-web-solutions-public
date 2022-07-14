import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../components/book/bookSlice.js";

export const store = configureStore({
  reducer: {
    book: bookReducer,
  },
});
