"use client";

// * Components
import BookListArea from "~/components/Bookstore/BookListArea";
import BookListHeader from "~/components/Bookstore/BookListHeader";

const BookstoreDashboard = () => {
  return (
    <main className="flex min-h-screen w-full flex-row items-center justify-center gap-20 overflow-y-auto p-10 ">
      <div className="cut-out bg-s-med-white flex h-full w-2/3 flex-col gap-2 shadow-xl">
        <BookListHeader />
        <BookListArea />
      </div>
    </main>
  );
};

export default BookstoreDashboard;
