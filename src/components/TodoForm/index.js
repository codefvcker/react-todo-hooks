import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [todoText, setTodoText] = useState("");

  const submitHandler = e => {
    e.preventDefault();
    addTodo(todoText);
    setTodoText("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={todoText}
        onChange={e => setTodoText(e.target.value)}
        placeholder="Type your todo here"
      />
      <button type="submit">Add todo</button>
    </form>
  );
};
