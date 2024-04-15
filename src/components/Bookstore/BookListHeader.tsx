"use client";

import { AiFillCodepenCircle, AiOutlinePlusCircle } from "react-icons/ai";

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
        <button className="flex items-center justify-center gap-2">
          <AiOutlinePlusCircle
            size={35}
            className="text-s-light-orange opacity-50"
          />
          <p>Add Book</p>
        </button>
      </div>
    </div>
  );
};

export default BookStoreListHeader;
