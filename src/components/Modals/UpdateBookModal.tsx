import { SubmitHandler, useForm } from "react-hook-form";
import { editBook } from "~/lib/bookstore/bookstoreSlice";
import { useAppDispatch } from "~/lib/hooks";
import { IoMdCloseCircleOutline } from "react-icons/io";

interface Props {
  id: string | number;
  name: string;
  description: string;
  price: number | string;
  category: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface BookForm {
  name: string;
  description: string;
  price: number | string;
  category: string;
}

const UpdateBookModal = ({
  id,
  name,
  description,
  price,
  category,
  setModal,
}: Props) => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookForm>();

  const onSubmit: SubmitHandler<BookForm> = (data) => {
    console.log(data);
    dispatch(editBook({ id, ...data }));
    setModal(false);
  };

  return (
    <div className="bg-s-black-modal absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center">
      <div>
        <form
          className="bg-s-white flex flex-col gap-2 p-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex justify-end">
            <IoMdCloseCircleOutline
              size={30}
              onClick={() => setModal(false)}
              className="hover:cursor-pointer hover:text-red-400"
            />
          </div>

          <label>Book Name</label>
          <input
            className="border-2 border-red-100 p-1"
            defaultValue={name}
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-500" role="alert">
              {errors.name.message}
            </p>
          )}
          <label>Book Description</label>
          <input defaultValue={description} {...register("description")} />
          {errors.description && (
            <p className="text-red-500" role="alert">
              {errors.description.message}
            </p>
          )}
          <label>Book Price</label>
          <input defaultValue={price} {...register("price")} />
          {errors.price && (
            <p className="text-red-500" role="alert">
              {errors.price.message}
            </p>
          )}
          <label>Book Category</label>
          <input defaultValue={category} {...register("category")} />
          {errors.category && (
            <p className="text-red-500" role="alert">
              {errors.category.message}
            </p>
          )}
          <button
            type="submit"
            className="text-s-white mt-2 rounded bg-green-400 p-2 hover:bg-green-500"
          >
            Update Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBookModal;
