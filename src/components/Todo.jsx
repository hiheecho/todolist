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
    <TodoComponent>
      <ListTitle>{todo.title}</ListTitle>
      <p>{todo.content}</p>
      <BtnContainer>
        <button style={deleteBtnStyle} onClick={deleteList}>
          삭제
        </button>
        <button style={cancleBtnStyle} onClick={toggleList}>
          {todo.isDone ? "취소" : "완료"}
        </button>
      </BtnContainer>
    </TodoComponent>
  );
}
const TodoComponent = styled.div`
  border: none;
  background-color: lemonchiffon;
  color: #424242;
  padding: 5px 30px;
  border-radius: 5px;
  margin: 0px auto 20px auto;
  width: 300px;
  border-radius: 10px;
`;
const ListTitle = styled.h3`
  margin-top: 20px;
`;
const BtnContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: right;
  gap: 10px;
`;
const deleteBtnStyle = {
  border: "none",
  backgroundColor: " coral",
  color: "#fff",
  padding: "5px 10px",
  display: "flex",
  borderRadius: "5px",
  cursor: "pointer",
};
const cancleBtnStyle = {
  border: "none",
  backgroundColor: "yellowgreen",
  color: "#fff",
  padding: "5px 10px",
  display: "flex",
  borderRadius: "5px",
  cursor: "pointer",
};

export default Todo;
