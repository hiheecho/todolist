import { v4 as uuidv4 } from "uuid";

//Action Value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const GET_TODO = "GET_TODO";

//Action Creator
//TodoList추가
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
//TodoList삭제
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};
//TodoList 버튼 토글(완료-취소)
export const toggleTodo = (payload) => {
  return {
    type: TOGGLE_TODO,
    payload,
  };
};
//TodoList 상세페이지 불러오기
export const getTodo = (payload) => {
  return {
    type: GET_TODO,
    payload,
  };
};

//Initial State
const InitialState = {
  todos: [
    {
      id: uuidv4(),
      title: "스타벅스가기",
      content: "쿠폰쓰기",
      isDone: false,
    },
  ],
};

//Reducer
const todos = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        todos: [...state.todos, action.payload],
      };
    }
    default:
      return state; // error
  }
};
//export default reducer
export default todos;
