// This file configures Redux store and defines types for RootState & AppDispatch.
import { configureStore } from "@reduxjs/toolkit";
import converterReducer from "./features/converterSlice";
import themeReducer from "./features/themeSlice";

// Configure Redux store with the converterSlice reducer
export const store = configureStore({
  reducer: {
    converter: converterReducer,
    theme: themeReducer,
  },
});

// Define RootState type as the return type of store.getState
export type RootState = ReturnType<typeof store.getState>;

// Define AppDispatch type as the dispatch function of the store
export type AppDispatch = typeof store.dispatch;
