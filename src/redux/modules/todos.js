import { v4 as uuidv4 } from "uuid";

//Action Value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

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
    payload: payload,
  };
};
//TodoList 버튼 토글(완료-취소)
export const toggleTodo = (payload) => {
  return {
    type: TOGGLE_TODO,
    payload,
  };
};

//Initial State
const InitialState = [
  {
    id: uuidv4(),
    title: "리액트 공부하기",
    content: "리덕스 정리",
    isDone: true,
  },
  {
    id: uuidv4(),
    title: "카페가기",
    content: "아메리카노 샷추가",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "청소하기",
    content: "옷정리하기",
    isDone: false,
  },
];

//Reducer
const todos = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          content: action.payload.content,
          isDone: false,
        },
      ];
    case DELETE_TODO:
      console.log(action);
      return state.filter((todo) => todo.id !== action.payload);
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};
//export default reducer
export default todos;
