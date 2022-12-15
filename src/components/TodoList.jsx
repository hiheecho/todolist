import React from "react";

function TodoList({ isActive }) {
  return (
    <div>
      <h3>{isActive ? "Working" : "Done"}</h3>
    </div>
  );
}

export default TodoList;
