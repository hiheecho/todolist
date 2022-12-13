import React from "react";
import { useNavigate } from "react-router-dom";

function TodoList() {
  const navigate = useNavigate();
  return (
    <div>
      <p>TodoList</p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        이전으로
      </button>
    </div>
  );
}

export default TodoList;
