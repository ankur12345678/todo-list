import React from "react";
import { ImCross } from "react-icons/im";
function Todo({ id, title, Completed, toogleCheck, RemoveTodo }) {
  return (
    <div className="todo">
      <div className="todo-title">
        <input
          type="checkbox"
          checked={Completed}
          onChange={() => {
            toogleCheck(id);
          }}
        />
        <p className={`${Completed ? "completed" : ""}`}>{title}</p>
      </div>
      <div
        className="cross-btn"
        onClick={() => {
          RemoveTodo(id);
        }}
      >
        <ImCross />
      </div>
    </div>
  );
}

export default Todo;
