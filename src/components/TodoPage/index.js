import React, { useState, useEffect, useReducer } from "react";
import { Context } from "../context";
import { TodoList } from "../TodoList";
import reducer from "../reducer";

export const TodoPage = () => {
  return (
    <div className="todo-page">
      <div className="todo-page__header">
        <h1>Todo list which used only hooks</h1>
        <input type="text" />
        <button onClick={() => {}}>Add todo</button>
      </div>
      <div className="todo-content">
        <TodoList />
      </div>
    </div>
  );
};
