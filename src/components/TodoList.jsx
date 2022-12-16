import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Todo from "./Todo";

function TodoList({ isActive }) {
  const todos = useSelector((state) => state.todos);

  return (
    <List>
      <ListTitle>{isActive ? "Working 🔥" : "Done ✅"}</ListTitle>
      {todos
        .filter((todo) => todo.isDone === !isActive)
        .map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
    </List>
  );
}
const List = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;
const ListTitle = styled.h2`
  text-align: center;
`;
export default TodoList;
