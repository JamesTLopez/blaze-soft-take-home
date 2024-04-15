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
        <div className="hover:bg-s-light-orange border-s-light-orange mb-2 flex min-h-[40px] items-center gap-5 px-1 py-2">
          <h2 className="flex-1 font-bold">BOOK NAME</h2>
          <h2 className="flex max-w-[300px] flex-1 truncate font-bold">
            DESCRIPTION
          </h2>
          <h2 className="flex-1 truncate font-bold">CATEGORY</h2>
          <h2 className="flex flex-1 justify-end font-bold">PRICE</h2>
          <div className="min-w-14"></div>
        </div>
        {bookstore.map((book) => (
          <BookListItem key={book.id} {...book} />
        ))}
      </div>
      {openCreateModal && <CreateBookModal setModal={setCreateModal} />}
    </>
  );
}

export default BookAreaList;
