import TodoForm from "./TodoForm";
import TodoBox from "./TodoBox";
import EditForm from "./EditForm";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";

function TodoWrapper() {
  const searchTerm = useSelector((state) => state.todos.searchTerm);
  const todos = useSelector((state) => state.todos.todos);

  // Filter todos based on the search term
  const filteredTodos = todos.filter((todo) =>
    todo.task.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Determine which list to display based on the search term
  const displayTodos = searchTerm ? filteredTodos : todos;

  return (
    <div className="Container">
      <h1>Things to do</h1>
      <TodoForm />
      <div classname="search">
        <SearchBar />
      </div>

      {/* Displaying Todo Items */}
      {displayTodos.length > 0 ? (
        displayTodos.map((todo) =>
          todo.isEditing ? (
            <EditForm task={todo} key={todo.id} />
          ) : (
            <TodoBox task={todo} key={todo.id} />
          )
        )
      ) : (
        <div className="message">
          <p>
            {searchTerm ? "No tasks match your search" : "No tasks available"}
          </p>
        </div>
      )}
    </div>
  );
}

export default TodoWrapper;
