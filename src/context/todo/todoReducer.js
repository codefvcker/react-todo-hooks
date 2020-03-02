import { ADD_TODO, SHOW_LOADER, REMOVE_TODO, FETCH_TODOS } from "../types";

export const todoReducer = (state, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        loading: true
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case FETCH_TODOS:
      return {
        ...state,
        todos: action.payload,
        loading: false
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
};
