import React, { useContext } from "react";
import { Context } from "../context";

export const TodoItem = ({ text, id, done }) => {
  const { dispatch } = useContext(Context);

  return (
    <li id={id}>
      <label>
        <input
          type="checkbox"
          checked={done}
          onChange={() =>
            dispatch({
              type: "toggle",
              payload: id
            })
          }
        />
        <span>{text}</span>
        <button
          onClick={() =>
            dispatch({
              type: "remove",
              payload: id
            })
          }
        >
          X
        </button>
      </label>
    </li>
  );
};
