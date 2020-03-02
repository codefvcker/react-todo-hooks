import React from "react";
import { TodoItem } from "../TodoItem";

export const TodoList = ({ todos }) => {
  const renderTodo = todos =>
    todos.map(item => {
      const { text, id, done } = item;
      return <TodoItem key={text + id} id={id} done={done} text={text} />;
    });

  return (
    <div className="todo-list">
      <ul>{renderTodo(todos)}</ul>
    </div>
  );
};
