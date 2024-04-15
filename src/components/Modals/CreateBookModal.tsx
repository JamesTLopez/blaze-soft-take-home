import { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
interface Props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface Book {
  name: string;
  description: string;
  price: number | string;
  category: string;
}

const CreateBookModal = ({ setModal }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Book>();
  const onSubmit: SubmitHandler<Book> = (data) => console.log(data);

  const wrapperRef = useRef(null);

  return (
    <div
      ref={wrapperRef}
      className="bg-s-black-modal absolute bottom-0 left-0 right-0 top-0 flex h-full w-full items-center justify-center"
    >
      <div>
        <form
          className="bg-s-white flex flex-col gap-2 p-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <button type="button" onClick={() => setModal(false)}>
            Close Modal
          </button>
          <label>Book Name</label>
          <input
            className="border-2 border-red-100 p-1"
            defaultValue=""
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-500" role="alert">
              {errors.name.message}
            </p>
          )}
          <label>Book Description</label>
          <input defaultValue="" {...register("description")} />
          {errors.description && (
            <p className="text-red-500" role="alert">
              {errors.description.message}
            </p>
          )}
          <label>Book Price</label>
          <input defaultValue="" {...register("price")} />
          {errors.price && (
            <p className="text-red-500" role="alert">
              {errors.price.message}
            </p>
          )}
          <label>Book Category</label>
          <input defaultValue="" {...register("category")} />
          {errors.category && (
            <p className="text-red-500" role="alert">
              {errors.category.message}
            </p>
          )}
          <button type="submit">Add Book</button>
        </form>
      </div>
    </div>
  );
};

export default CreateBookModal;
