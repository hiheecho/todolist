import { createStore } from "redux";
import { combineReducers } from "redux";
import addTodos from "../modules/todos";

const rootReducer = combineReducers({
  addTodos: addTodos,
});
const store = createStore(rootReducer);

export default store;
