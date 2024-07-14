import TodoForm from "./TodoForm";
import TodoBox from "./TodoBox";
import EditForm from "./EditForm";
import { useLocalStorage } from "../hook/localStorageUtils.js";
import { EditToDo } from "../TodoSlice/TodoSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
function TodoWrapper() {
  const toDo = useSelector((store) => store.todos);

  return (
    <div className="Container">
      <h1>Things to do</h1>
      <TodoForm toDo={toDo} />

      {toDo.map((todo, key) =>
        todo.isEditing ? (
          <EditForm task={todo} toDo={toDo} key={key} />
        ) : (
          <TodoBox task={todo} toDo={toDo} key={key} />
        )
      )}
    </div>
  );
}

export default TodoWrapper;
