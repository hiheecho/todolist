import { v4 as uuidv4 } from "uuid";
//Action Value
const SUBMIT_TODOS = "SUBMIT_TODOS";

//Action Creator
export const submitTodo = (payload) => {
  return {
    type: SUBMIT_TODOS,
    payload,
  };
};

//Initial State
const InitialState = [
  {
    id: uuidv4(),
    title: "스타벅스가기",
    content: "쿠폰쓰기",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "리액트 공부하기",
    content: "리덕스 공부하기",
    isDone: true,
  },
  {
    id: uuidv4(),
    title: "영양제 먹기",
    content: "비타민 챙겨먹기",
    isDone: false,
  },
];

//Reducer
const addTodos = (state = InitialState, action) => {
  switch (action.type) {
    case SUBMIT_TODOS: {
      return {
        id: uuidv4(),
        title: state.title,
        content: state.content,
        isDone: false,
      };
    }
    default:
      return state;
  }
};

//export default reducer
export default addTodos;
