// * Components
import BookListArea from "~/components/Bookstore/BookListArea";
import StoreProviders from "~/lib/Providers";

const BookstoreDashboard = () => {
  return (
    <main className="flex min-h-screen w-full flex-row items-center justify-center gap-20 overflow-y-auto p-10 ">
      <div className="cut-out bg-s-med-white flex h-full w-3/4 flex-col gap-2 shadow-xl">
        <StoreProviders>
          <BookListArea />
        </StoreProviders>
      </div>
    </main>
  );
};

export default BookstoreDashboard;
