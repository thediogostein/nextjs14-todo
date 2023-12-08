import AddNew from "@/components/AddNew";
import TodoList from "@/components/TodoList";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <AddNew />
      <TodoList />
    </main>
  );
}
