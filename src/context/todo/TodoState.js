import React from "react";
import TodoContext from "./todoContext";

export const TodoState = () => {
  return <TodoContext.Provider value={{}}>{children}</TodoContext.Provider>;
};
