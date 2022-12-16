// src/pages/home.js
import Input from "../components/Input";
import TodoList from "../components/TodoList";
import styled from "styled-components";

const Home = () => {
  return (
    <MainComponent>
      <Input />
      <ListComponent>
        <TodoList isActive={true} />
        <TodoList isActive={false} />
      </ListComponent>
    </MainComponent>
  );
};
const MainComponent = styled.div`
  width: 100%;
`;
const ListComponent = styled.div`
  display: flex;
  justify-content: space-between;
`;
export default Home;
