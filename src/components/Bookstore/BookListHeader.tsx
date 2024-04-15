import { AiOutlinePlusCircle } from "react-icons/ai";
interface Props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const BookStoreListHeader = ({ setModal }: Props) => {
  return (
    <div className="flex w-full items-center px-5 pt-5">
      <div className="text-s-light-orange flex flex-1 justify-start">
        <h1 className="text-lg font-semibold">Blazesoft Bookstore</h1>
      </div>
      <div>
        <button
          type="button"
          onClick={() => setModal(true)}
          className="flex items-center justify-center gap-2 rounded-md bg-white p-2 hover:bg-green-400"
        >
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
