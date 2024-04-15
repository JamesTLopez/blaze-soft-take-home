import { configureStore } from "@reduxjs/toolkit";
import bookstoreReducer from "~/lib/bookstore/bookstoreSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      bookstore: bookstoreReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
