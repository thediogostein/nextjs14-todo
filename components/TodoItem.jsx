"use client";

import { FaRegPenToSquare, FaRegTrashCan } from "react-icons/fa6";
import { useState } from "react";
import EditBtn from "./EditBtn";
import { updateTodo } from "@/actions/updateTodo";
import { deleteTodo } from "@/actions/deleteTodo";
import { toggleTodo } from "@/actions/toggleTodo";

const TodoItem = ({ id, name, isCompleted }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [todoName, setTodoName] = useState(name);

  const handleSave = () => {
    updateTodo(id, todoName);
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteTodo(id);
  };

  const editingTemplate = (
    <>
      <input
        type="text"
        defaultValue={name}
        className="rounded-sm bg-teal-900 px-2"
        onChange={(e) => setTodoName(e.target.value)}
      />
      <button
        onClick={() => setIsEditing(false)}
        className="px-4 py-1 bg-teal-100 text-teal-950 rounded-sm font-bold uppercase"
      >
        Cancel
      </button>
      <button
        onClick={handleSave}
        className="px-4 py-1 bg-teal-600 rounded-sm font-bold uppercase"
      >
        Update
      </button>
    </>
  );

  const template = (
    <>
      <input
        id={id}
        type="checkbox"
        defaultChecked={isCompleted}
        className="peer cursor-pointer"
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label htmlFor={id} className="peer-checked:line-through cursor-pointer">
        {name}
      </label>
      <div className="flex gap-2 items-center ">
        <button onClick={handleDelete} type="submit">
          <FaRegTrashCan />
        </button>
        <button onClick={() => setIsEditing(true)}>
          <FaRegPenToSquare />
        </button>
      </div>
    </>
  );

  return (
    <li className=" flex gap-4 items-center">
      {isEditing ? editingTemplate : template}
    </li>
  );
};
export default TodoItem;
