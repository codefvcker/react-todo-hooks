import React, { useState, useEffect, useReducer } from "react";
import { Context } from "../context";
import { TodoList } from "../TodoList";
import reducer from "../reducers";

export const TodoPage = () => {
  let [state, dispatch] = useReducer(reducer, []);
  let [todoText, setTodoText] = useState("");

  const addTodo = () => {
    dispatch({
      type: "add",
      payload: todoText
    });
    setTodoText("");
  };

  return (
    <Context.Provider value={{ dispatch }}>
      <div className="todo-page">
        <div className="todo-page__header">
          <h1>Todo list which used only hooks</h1>
          <input
            type="text"
            value={todoText}
            onChange={e => setTodoText(e.target.value)}
          />
          <button onClick={() => addTodo()}>Add todo</button>
        </div>
        <div className="todo-content">
          <TodoList todos={state} />
        </div>
      </div>
    </Context.Provider>
  );
};
