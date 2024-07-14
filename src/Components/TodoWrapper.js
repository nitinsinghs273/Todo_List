import TodoForm from "./TodoForm";
import TodoBox from "./TodoBox";
import EditForm from "./EditForm";
import { useSelector } from "react-redux";

function TodoWrapper() {
  const toDo = useSelector((store) => store.todos);
  return (
    <div className="Container">
      <h1>Things to do</h1>
      <TodoForm />

      {toDo.map((todo, key) =>
        todo.isEditing ? (
          <EditForm task={todo} key={todo.id} />
        ) : (
          <TodoBox task={todo} key={todo.id} />
        )
      )}
    </div>
  );
}

export default TodoWrapper;
