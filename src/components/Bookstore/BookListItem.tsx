import { Book } from "~/lib/bookstore/bookstoreSlice";

const BookListItem = (book: Book) => {
  return (
    <div className="flex max-h-[40px] gap-5 py-2">
      <h2 className="flex-1">{book.name}</h2>
      <h2 className="flex-2 max-w-[300px] truncate">{book.description}</h2>
      <h2 className="flex-1 truncate">{book.category}</h2>
      <h2 className="flex flex-1 justify-end">{book.price}</h2>
      <div>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default BookListItem;
