import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

function TodoList({ isActive }) {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <h3>{isActive ? "Working" : "Done"}</h3>
      {todos
        .filter((todo) => todo.isDone === !isActive)
        .map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
    </div>
  );
}

export default TodoList;
