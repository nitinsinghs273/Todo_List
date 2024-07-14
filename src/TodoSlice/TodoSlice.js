import { createSlice } from "@reduxjs/toolkit";
import {
  getLocalStorage,
  setLocalStorage,
} from "./../hook/localStorageUtils.js";

const LOCAL_STORAGE_KEY = "todos";

const initialState = getLocalStorage(LOCAL_STORAGE_KEY);

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    AddTasks(state, action) {
      const newState = [...state, action.payload];
      setLocalStorage(LOCAL_STORAGE_KEY, newState);
      return newState;
    },
    EditTask(state, action) {
      console.log(action);
      const { id, task } = action.payload;
      const newState = state.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: false } : todo
      );
      setLocalStorage(LOCAL_STORAGE_KEY, newState);
      return newState;
    },
    EditToDo(state, action) {
      const { id } = action.payload;
      const newState = state.map((todo) =>
        todo.id === id ? { ...todo, isEditing: true } : todo
      );
      setLocalStorage(LOCAL_STORAGE_KEY, newState);
      return newState;
    },
    HandleDelete(state, action) {
      const newState = state.filter((todo) => todo.id !== action.payload.id);
      setLocalStorage(LOCAL_STORAGE_KEY, newState);
      return newState;
    },
    HandleComplete(state, action) {
      const { id } = action.payload;
      const newState = state.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      );
      setLocalStorage(LOCAL_STORAGE_KEY, newState);
      return newState;
    },
  },
});

export const { AddTasks, EditTask, EditToDo, HandleDelete, HandleComplete } =
  todoSlice.actions;

export default todoSlice.reducer;
