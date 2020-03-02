import React from "react";

export const TodoItem = ({ text, id, done }) => {
  return (
    <li id={id}>
      <label>
        <input type="checkbox" checked={done} />
        <span>{text}</span>
        <button onClick={() => {}}>X</button>
      </label>
    </li>
  );
};
