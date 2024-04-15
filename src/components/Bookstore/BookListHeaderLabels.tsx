const BookListHeaderLabels = () => {
  return (
    <div className="hover:bg-s-light-orange border-s-light-orange mb-2 flex min-h-[40px] items-center gap-5 px-1 py-2">
      <h2 className="flex-1 font-bold">BOOK NAME</h2>
      <h2 className="flex max-w-[300px] flex-1 truncate font-bold">
        DESCRIPTION
      </h2>
      <h2 className="flex-1 truncate font-bold">CATEGORY</h2>
      <h2 className="flex flex-1 justify-end font-bold">PRICE</h2>
      <div className="min-w-14"></div>
    </div>
  );
};

export default BookListHeaderLabels;
