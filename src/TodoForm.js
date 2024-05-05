import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function TodoForm({ AddTodo }) {
  const [title, SetTitle] = useState("");
  function handlesubmit(e) {
    e.preventDefault();
    if (title.trim().length === 0) {
      toast.error("Please fill input", {
        autoClose: 2000,
      });
    } else {
      const newTodo = {
        title: title,
        id: uuid(),
        Completed: false,
      };
      SetTitle("");
      AddTodo(newTodo);
    }
  }
  return (
    <>
      <form onSubmit={handlesubmit} className="todoForm">
        <input
          className="todoForm_input"
          type="text"
          value={title}
          onChange={(e) => {
            SetTitle(e.target.value);
          }}
        ></input>
        <button className="todoForm_btn" type="submit">
          Add
        </button>
      </form>
    </>
  );
}

export default TodoForm;
