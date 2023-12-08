"use client";

import { createTodo } from "@/actions/createTodo";
import { useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="px-4 py-1 bg-teal-600 rounded-sm font-bold uppercase"
    >
      {pending ? "Adding..." : "Add"}
    </button>
  );
};

const AddNew = () => {
  const [message, formAction] = useFormState(createTodo, null);
  const formRef = useRef(null);

  const handleAction = async (formData) => {
    formAction(formData);
    formRef.current?.reset();
  };

  return (
    <form ref={formRef} action={handleAction} className="flex gap-2 mb-4">
      <input type="text" name="name" className="rounded-sm bg-teal-900 px-2" />
      <SubmitBtn />
    </form>
  );
};
export default AddNew;
