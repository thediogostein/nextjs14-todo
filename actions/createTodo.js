"use server";
import supabase from "@/supabase/supabaseClient";
import { revalidatePath } from "next/cache";

export const createTodo = async (prevState, formData) => {
  const name = formData.get("name");

  const newTodo = {
    name,
    isCompleted: false,
  };

  const { error } = await supabase //
    .from("todos")
    .insert(newTodo);

  if (!error) {
    revalidatePath("/");
    return "success";
  }
};
