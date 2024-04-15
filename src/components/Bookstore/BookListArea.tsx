"use client";

import { useEffect, useState } from "react";
import BookListItem from "~/components/Bookstore/BookListItem";
import { useAppDispatch, useAppSelector } from "~/lib/hooks";
import {
  setBookStoreData,
  selectBookstore,
} from "~/lib/bookstore/bookstoreSlice";
import { bookstoreData } from "~/mock/bookstoreData";
import CreateBookModal from "../Modals/CreateBookModal";
import BookListHeader from "./BookListHeader";

function BookAreaList() {
  const [openCreateModal, setCreateModal] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const bookstore = useAppSelector(selectBookstore);

  useEffect(() => {
    // Fake api call
    dispatch(setBookStoreData(bookstoreData));
  }, []);

  return (
    <>
      <BookListHeader setModal={setCreateModal} />
      <div className="flex w-full flex-col p-5 ">
        {bookstore.map((book) => (
          <BookListItem key={book.id} {...book} />
        ))}
      </div>
      {openCreateModal && <CreateBookModal setModal={setCreateModal} />}
    </>
  );
}

export default BookAreaList;
