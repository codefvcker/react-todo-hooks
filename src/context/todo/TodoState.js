import React, { useReducer } from "react";
import { TodoContext } from "./todoContext";
import { todoReducer } from "./todoReducer";
import axios from "axios";
import { ADD_TODO, REMOVE_TODO, FETCH_TODOS } from "../types";

const url = process.env.REACT_APP_DB_URL;

export const TodoState = ({ children }) => {
  const initialState = {
    todos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = async text => {
    const todo = {
      text,
      done: false,
      date: new Date().toJSON()
    };
    const res = await axios.post(`${url}/todos.json`, todo);
    console.log(res);
    const payload = {
      ...todo,
      id: res.data.name
    };
    dispatch({
      type: ADD_TODO,
      payload
    });
  };

  const fetchTodos = async () => {
    const res = await axios.get(`${url}/todos.json`);
    console.log(res.data);
    const payload = Object.keys(res.data || []).map(key => ({
      ...res.data[key],
      id: key
    }));

    dispatch({
      type: FETCH_TODOS,
      payload
    });
  };

  const removeTodo = async id => {
    await axios.delete(`${url}/todos/${id}.json`);
    dispatch({
      type: REMOVE_TODO,
      payload: id
    });
  };

  return (
    <TodoContext.Provider
      value={{
        loading: state.loading,
        todos: state.todos,
        addTodo,
        fetchTodos,
        removeTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
