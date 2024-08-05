import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../TodoSlice/TodoSlice";

function SearchBar() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.todos.searchTerm);

  //handling Search Changes
  function handleSearchChange(e) {
    dispatch(setSearchTerm(e.target.value));
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        className="todo-input"
        placeholder={`🔍 Search tasks...`}
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchBar;
