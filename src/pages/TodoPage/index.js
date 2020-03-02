import React, { useContext, useEffect } from "react";
import { TodoContext } from "../../context/todo/todoContext";
import { TodoForm, TodoList } from "../../components";

export const TodoPage = () => {
  const { addTodo, todos, fetchTodos } = useContext(TodoContext);
  useEffect(() => {
    fetchTodos();
    // eslint-disable-nex-line
  }, []);
  return (
    <div className="todo-page">
      <TodoForm addTodo={addTodo} />
      <hr />
      <div className="todo-content">
        <TodoList todos={todos} />
      </div>
    </div>
  );
};
