import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";

const TodoItem = ({ id, name, isCompleted }) => {
  return (
    <li className=" flex gap-4 items-center">
      <input
        id={id}
        type="checkbox"
        defaultChecked={isCompleted}
        className="peer"
      />
      <label htmlFor={id} className="peer-checked:line-through">
        {name}
      </label>
      <div className="flex gap-2 items-center ">
        <DeleteBtn id={id} />
        <EditBtn />
      </div>
    </li>
  );
};
export default TodoItem;
