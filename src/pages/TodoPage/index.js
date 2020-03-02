import React from "react";
import { TodoForm, TodoList } from "../../components";

export const TodoPage = () => {
  return (
    <div className="todo-page">
      <TodoForm />
      <hr />
      <div className="todo-content">
        <TodoList />
      </div>
    </div>
  );
};
