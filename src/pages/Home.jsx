// src/pages/home.js
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Input />
      <button
        onClick={() => {
          navigate("/TodoList");
        }}
      >
        TodoList 이동
      </button>
    </div>
  );
};

export default Home;
