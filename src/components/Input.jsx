import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../redux/modules/todos";

const Input = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const titleInput = useRef();
  const contentInput = useRef();
  const titleChange = (event) => {
    setTitle(event.target.value);
  };
  const contentChange = (event) => {
    setContent(event.target.value);
  };
  const submitTodo = (event) => {
    event.preventDefault();
    if (!title) {
      alert("제목을 입력하세요");
      titleInput.current.focus();
      return;
    }
    if (!content) {
      alert("내용을 입력하세요");
      contentInput.current.focus();
      return;
    }
    const newTodo = {
      id: uuidv4(),
      title: title,
      content: content,
      isDone: false,
    };
    dispatch(addTodo(newTodo));

    setTitle("");
    setContent("");
    titleInput.current.focus();
  };
  return (
    <form onSubmit={submitTodo}>
      <label htmlFor="title">제목 : </label>
      <input id="title" ref={titleInput} value={title} onChange={titleChange} />
      <label htmlFor="content">내용 : </label>
      <input
        id="content"
        ref={contentInput}
        value={content}
        onChange={contentChange}
      />
      <button>추가</button>
    </form>
  );
};

export default Input;
