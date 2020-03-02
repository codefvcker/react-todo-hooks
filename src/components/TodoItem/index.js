import React, { useContext } from "react";
import { TodoContext } from "../../context/todo/todoContext";

export const TodoItem = ({ text, id }) => {
  const { removeTodo } = useContext(TodoContext);
  return (
    <li id={id}>
      <span>{text}</span>
      <button onClick={() => removeTodo(id)}>X</button>
    </li>
  );
};
