import { useState } from "react";
import TodoForm from "./TodoForm";
import Todos from "./Todos";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn Back-Flip", Completed: false },
    { id: 2, title: "Cook", Completed: true },
    { id: 3, title: "Call Sarah", Completed: false },
  ]);
  function AddTodo(newTodo) {
    setTodos((prev) => {
      return [...prev, newTodo];
    });
  }
  function RemoveTodo(id) {
    setTodos((prev) => {
      return prev.filter((todo) => {
        return todo.id != id;
      });
    });
  }
  function toogleCheck(id) {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, Completed: !todo.Completed };
        } else {
          return { ...todo };
        }
      });
    });
  }
  return (
    <div className="container">
      <ToastContainer />
      <h1 className="main-title"> Todo-List</h1>
      <TodoForm AddTodo={AddTodo} />
      <Todos todos={todos} toogleCheck={toogleCheck} RemoveTodo={RemoveTodo} />
    </div>
  );
}

export default App;
