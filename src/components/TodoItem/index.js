import React, { useContext } from "react";
import { Context } from "../context";

export const TodoItem = ({ text, id, done }) => {
  return (
    <li>
      <label>
        <input type="checkbox" />
        <button>X</button>
      </label>
    </li>
  );
};
