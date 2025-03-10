import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./TodoSlice/TodoSlice";

const store = configureStore({
  reducer: {
    todos: TodoReducer,
  },
});

export default store;
