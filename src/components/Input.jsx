import React from "react";
import addTodos from "../redux/modules/todos";

function Input() {
  return (
    <form>
      <input type="text" />
      <input type="text" />
      <button>추가</button>
    </form>
  );
}

export default Input;
