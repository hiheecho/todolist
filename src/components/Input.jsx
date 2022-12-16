import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../redux/modules/todos";
import styled from "styled-components";

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
    <SubmitForm onSubmit={submitTodo}>
      <Label htmlFor="title">제목 : </Label>
      <InputComponent
        id="title"
        ref={titleInput}
        value={title}
        onChange={titleChange}
      />
      <Label htmlFor="content">내용 : </Label>
      <InputComponent
        id="content"
        ref={contentInput}
        value={content}
        onChange={contentChange}
      />
      <SubmitBtn>추가</SubmitBtn>
    </SubmitForm>
  );
};

const SubmitForm = styled.form`
  width: 90%;
  height: 100px;
  margin: auto;
  background-color: #9a9a9a;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
`;
const InputComponent = styled.input`
  border: none;
  width: 200px;
  border-radius: 5px;
  line-height: 25px;
  padding-left: 5px;
  margin-right: 15px;
`;
const SubmitBtn = styled.button`
  border: none;
  background-color: #3176c9;
  color: #fff;
  padding: 5px 10px;
  display: flex;
  border-radius: 5px;
  cursor: pointer;
`;
const Label = styled.label`
  color: #fff;
`;
export default Input;
