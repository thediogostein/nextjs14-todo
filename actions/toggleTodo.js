"use server";

import supabase from "@/supabase/supabaseClient";

export const toggleTodo = async (id, isCompleted) => {
  const { error } = await supabase //
    .from("todos")
    .update({ isCompleted })
    .eq("id", id);
};
