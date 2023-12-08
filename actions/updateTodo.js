"use server";
import supabase from "@/supabase/supabaseClient";
import { revalidatePath } from "next/cache";

export const updateTodo = async (id, name) => {
  const { error } = await supabase //
    .from("todos")
    .update({ name })
    .eq("id", id);

  if (!error) {
    revalidatePath("/");
  }
};
