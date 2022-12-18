import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function DetailBox() {
  const navigate = useNavigate();
  const params = useParams();
  const filteredTodos = useSelector((state) => {
    return state.todos.filter((item) => item.id === params.id);
  });
  useEffect(() => {
    if (filteredTodos.length <= 0 || filteredTodos.length > 1) {
      alert("올바르지 않은 접근입니다. 메인페이지로 이동합니다.");
      navigate("/");
    }
  }, []);

  const todo = filteredTodos[0];

  const goBackBtn = () => {
    navigate("/");
  };
  return (
    <div>
      <span>{todo?.id}</span>
      <h3>{todo?.title}</h3>
      <h4>{todo?.content}</h4>
      <p>{todo?.isDone ? "Done" : "Working"}</p>
      <button onClick={goBackBtn}>이전 페이지로 가기</button>
    </div>
  );
}

export default DetailBox;
