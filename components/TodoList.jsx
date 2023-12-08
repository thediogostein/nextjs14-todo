import { getAllTodos } from "@/actions/getAllTodos";
import TodoItem from "./TodoItem";

const TodoList = async () => {
  const { data, error } = await getAllTodos();

  return (
    <ul>
      {data.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </ul>
  );
};
export default TodoList;
