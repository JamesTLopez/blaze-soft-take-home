import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "~/lib/store";
import { bookstoreData } from "~/mock/bookstoreData";

export interface Book {
  id: number | string;
  name: string;
  description: string;
  price: number | string;
  category: string;
}

export interface BookstoreState {
  value: number;
  bookstoreData: Book[];
}

const initialState: BookstoreState = {
  value: 0,
  bookstoreData: bookstoreData,
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

export const selectCount = (state: RootState) => state.bookstore.value;
export const selectBookstore = (state: RootState) =>
  state.bookstore.bookstoreData;
export default bookStoreSlice.reducer;
