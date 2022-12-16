import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/modules/todos";

function Todo({ todo }) {
  const dispatch = useDispatch();
  const deleteList = () => {
    dispatch(deleteTodo(todo.id));
  };
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.content}</p>
      <div>
        <button onClick={deleteList}>삭제</button>
        <button>{todo.isDone ? "취소" : "완료"}</button>
      </div>
    </div>
  );
}

export default Todo;
