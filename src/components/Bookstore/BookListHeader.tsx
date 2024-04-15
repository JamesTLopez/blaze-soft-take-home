"use client";
import { AiFillCodepenCircle } from "react-icons/ai";
import AddBookButton from "~/components/Bookstore/AddBookButton";

const BookStoreListHeader = () => {
  return (
    <div className="flex w-full items-center px-5 pt-5">
      <div>
        <AiFillCodepenCircle
          size={35}
          className="text-s-light-orange opacity-50"
        />
      </div>
      <div className="text-s-light-orange flex flex-1 justify-center">
        <h1 className="text-lg font-semibold">Blazesoft Bookstore</h1>
      </div>
      <div>
        <AddBookButton />
      </div>
    </div>
  );
};

export default BookStoreListHeader;
