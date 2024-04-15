"use client";

import { AiOutlinePlusCircle } from "react-icons/ai";
import { useAppDispatch } from "~/lib/hooks";
import { increment } from "~/lib/bookstore/bookstoreSlice";

const AddBookButton = () => {
  const dispatch = useAppDispatch();

  return (
    <button
      className="flex items-center justify-center gap-2"
      onClick={() => dispatch(increment())}
    >
      <AiOutlinePlusCircle
        size={35}
        className="text-s-light-orange opacity-50"
      />
      <p>Add Book</p>
    </button>
  );
};

export default AddBookButton;
