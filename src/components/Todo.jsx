import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteTodo, toggleTodo } from "../redux/modules/todos";

function Todo({ todo }) {
  console.log(todo.id);
  const dispatch = useDispatch();
  const deleteList = () => {
    return dispatch(deleteTodo(todo.id));
  };
  const toggleList = () => {
    return dispatch(toggleTodo(todo.id));
  };
  return (
    <ListComponent>
      <h4>{todo.title}</h4>
      <p>{todo.content}</p>
      <div>
        <button onClick={deleteList}>삭제</button>
        <button onClick={toggleList}>{todo.isDone ? "취소" : "완료"}</button>
      </div>
    </ListComponent>
  );
}
const ListComponent = styled.div`
  border: none;
  background-color: lemonchiffon;
  color: #424242;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 10px;
`;
export default Todo;
