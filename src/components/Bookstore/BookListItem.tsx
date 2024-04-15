import { Book, removeBook } from "~/lib/bookstore/bookstoreSlice";
import { useAppDispatch } from "~/lib/hooks";
import UpdateBookModal from "../Modals/UpdateBookModal";
import { useState } from "react";

const BookListItem = (book: Book) => {
  const dispatch = useAppDispatch();
  const [openUpdateModal, setUpdateModal] = useState<boolean>(false);

  return (
    <>
      <div
        className="hover:bg-s-light-orange border-s-light-orange flex min-h-[40px] items-center gap-5 border-t-2 px-1 py-2"
        onClick={() => setUpdateModal(true)}
      >
        <h2 className="flex-1">{book.name}</h2>
        <h2 className="flex max-w-[300px] flex-1 truncate">
          {book.description}
        </h2>
        <h2 className="flex-1 truncate">{book.category}</h2>
        <h2 className="flex flex-1 justify-end">{book.price}</h2>
        <div>
          <button
            className="text-s-white z-40 rounded bg-red-300 p-1 hover:bg-red-400"
            onClick={() => dispatch(removeBook(book.id))}
          >
            Delete
          </button>
        </div>
      </div>
      {openUpdateModal && (
        <UpdateBookModal
          id={book.id}
          name={book.name}
          description={book.description}
          price={book.price}
          category={book.category}
          setModal={setUpdateModal}
        />
      )}
    </>
  );
};

export default BookListItem;
