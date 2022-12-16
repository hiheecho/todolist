// src/pages/home.js
import Input from "../components/Input";
import TodoList from "../components/TodoList";
import styled from "styled-components";

const Home = () => {
  return (
    <MainComponent>
      <Input />
      <TodoList isActive={true} />
      <TodoList isActive={false} />
    </MainComponent>
  );
};
const MainComponent = styled.div`
  width: 100%;
`;
export default Home;
