"use client";

import BookListItem from "~/components/Bookstore/BookListItem";

function BookAreaList() {
  return (
    <div className="flex w-full flex-col p-5">
      <BookListItem />
      <BookListItem />
      <BookListItem />
      <BookListItem />
      <BookListItem />
      <BookListItem />
      <BookListItem />
    </div>
  );
}

export default BookAreaList;
