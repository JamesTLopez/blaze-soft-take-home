import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "~/lib/store";

export interface Book {
  id: number | string;
  name: string;
  description: string;
  price: number;
  category: string;
}

export interface BookstoreState {
  value: number;
}

const initialState: BookstoreState = {
  value: 0,
};

export const bookStoreSlice = createSlice({
  name: "bookstore",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    removeBook: () => {
      console.log("Remove book");
    },
    addBook: () => {
      console.log("Add book");
    },
    editBook: () => {
      console.log("Edit book");
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  removeBook,
  addBook,
  editBook,
} = bookStoreSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;
export default bookStoreSlice.reducer;
