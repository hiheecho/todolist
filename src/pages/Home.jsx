// src/pages/home.js
import Input from "../components/Input";
import TodoList from "../components/TodoList";
const Home = () => {
  return (
    <div>
      <Input />
      <TodoList isActive={true} />
      <TodoList isActive={false} />
    </div>
  );
};

export default Home;
