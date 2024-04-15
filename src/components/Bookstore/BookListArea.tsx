"use client";

import { useEffect } from "react";
import BookListItem from "~/components/Bookstore/BookListItem";
import { useAppDispatch, useAppSelector } from "~/lib/hooks";
import {
  setBookStoreData,
  selectBookstore,
} from "~/lib/bookstore/bookstoreSlice";
import { bookstoreData } from "~/mock/bookstoreData";
import CreateBookModal from "../Modals/CreateBookModal";

function BookAreaList() {
  const dispatch = useAppDispatch();
  const bookstore = useAppSelector(selectBookstore);

  useEffect(() => {
    // Fake api call
    dispatch(setBookStoreData(bookstoreData));
  }, []);

  return (
    <div className="flex w-full flex-col p-5">
      {bookstore.map((book) => (
        <BookListItem key={book.id} {...book} />
      ))}
      <CreateBookModal />
    </div>
  );
}

export default BookAreaList;
