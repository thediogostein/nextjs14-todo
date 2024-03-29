"use server";

import supabase from "@/supabase/supabaseClient";
import { revalidatePath } from "next/cache";

export const deleteTodo = async (id) => {
  const { error } = await supabase //
    .from("todos")
    .delete()
    .eq("id", id);

  if (!error) {
    revalidatePath("/");
    return "success";
  }
  if (error) {
    return "error";
  }
};
