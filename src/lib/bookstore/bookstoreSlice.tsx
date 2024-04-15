import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "~/lib/store";

export interface Book {
  id: number | string;
  name: string;
  description: string;
  price: number | string;
  category: string;
}

export interface BookstoreState {
  bookstoreData: Book[];
}

const initialState: BookstoreState = {
  bookstoreData: [],
};

export const bookStoreSlice = createSlice({
  name: "bookstore",
  initialState,
  reducers: {
    removeBook: (state, action: PayloadAction<number | string>) => {
      const bookstoreId = action.payload;
      state.bookstoreData = state.bookstoreData.filter(
        (book) => book.id !== bookstoreId,
      );
    },
    addBook: () => {
      console.log("Add book");
    },
    editBook: () => {
      console.log("Edit book");
    },
    setBookStoreData: (state, action: PayloadAction<Book[] | []>) => {
      state.bookstoreData = action.payload;
    },
  },
});

export const { removeBook, addBook, editBook, setBookStoreData } =
  bookStoreSlice.actions;

export const selectBookstore = (state: RootState) =>
  state.bookstore.bookstoreData;
export default bookStoreSlice.reducer;
