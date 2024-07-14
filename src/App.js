import { useState } from "react";
import TodoWrapper from "./Components/TodoWrapper";
import { useSelector } from "react-redux";

function App() {
  const { todos } = useSelector((store) => store.todos);

  return (
    <div className="App">
      <TodoWrapper />
    </div>
  );
}

export default App;
