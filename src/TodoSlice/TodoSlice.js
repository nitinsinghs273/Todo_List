import { createSlice } from "@reduxjs/toolkit";
import {
  getLocalStorage,
  setLocalStorage,
} from "./../hook/localStorageUtils.js";

const LOCAL_STORAGE_KEY = "todos";

const initialState = {
  todos: getLocalStorage(LOCAL_STORAGE_KEY),
  searchTerm: "",
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    AddTasks(state, action) {
      const newState = [...state.todos, action.payload];
      setLocalStorage(LOCAL_STORAGE_KEY, newState);
      state.todos = newState;
    },
    EditTask(state, action) {
      const { id, task } = action.payload;
      const newState = state.todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              task,
              isEditing: false,
              updatedAt: new Date().toISOString(),
              timestamp: new Date().toLocaleString(),
            }
          : todo
      );
      setLocalStorage(LOCAL_STORAGE_KEY, newState);
      state.todos = newState;
    },
    EditToDo(state, action) {
      const { id } = action.payload;
      const newState = state.todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: true } : todo
      );
      setLocalStorage(LOCAL_STORAGE_KEY, newState);
      state.todos = newState;
    },
    HandleDelete(state, action) {
      const newState = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      setLocalStorage(LOCAL_STORAGE_KEY, newState);
      state.todos = newState;
    },
    HandleComplete(state, action) {
      const { id } = action.payload;
      const newState = state.todos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      );
      setLocalStorage(LOCAL_STORAGE_KEY, newState);
      state.todos = newState;
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const {
  AddTasks,
  EditTask,
  EditToDo,
  HandleDelete,
  HandleComplete,
  setSearchTerm,
} = todoSlice.actions;

export default todoSlice.reducer;
