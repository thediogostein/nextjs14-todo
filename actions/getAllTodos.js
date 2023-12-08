import supabase from "@/supabase/supabaseClient";

export const getAllTodos = async () => {
  const { data, error } = await supabase //
    .from("todos")
    .select();

  return { data, error };
};
