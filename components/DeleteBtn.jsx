"use client";

import { deleteTodo } from "@/actions/deleteTodo";
import { FaRegTrashCan } from "react-icons/fa6";
import { useFormState, useFormStatus } from "react-dom";

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      <FaRegTrashCan />
    </button>
  );
};

const DeleteBtn = ({ id }) => {
  const [message, formAction] = useFormState(deleteTodo, null);

  console.log(message);

  return (
    <form action={formAction} className="flex">
      <input type="hidden" name="id" value={id} />
      <SubmitBtn />
    </form>
  );
};
export default DeleteBtn;
