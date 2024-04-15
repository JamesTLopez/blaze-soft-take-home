import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookForm } from "~/components/Modals/CreateBookModal";
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
    addBook: (state, action: PayloadAction<BookForm>) => {
      const bookstoreId = Math.floor(Math.random() * 100); // Usually the backend would return an id, but for this test, random number
      state.bookstoreData = [
        { id: bookstoreId, ...action.payload },
        ...state.bookstoreData,
      ];
    },
    editBook: (state, action: PayloadAction<Book>) => {
      state.bookstoreData = state.bookstoreData.map((book) => {
        if (book.id === action.payload.id) {
          return action.payload;
        }
        return book;
      });
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
