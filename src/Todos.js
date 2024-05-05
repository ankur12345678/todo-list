import React from "react";
import Todo from "./Todo";

function Todos({ todos, toogleCheck, RemoveTodo }) {
  return (
    <>
      {todos.map((todo) => (
        <Todo
          {...todo}
          key={todo.id}
          toogleCheck={toogleCheck}
          RemoveTodo={RemoveTodo}
        />
      ))}
    </>
  );
}

export default Todos;
