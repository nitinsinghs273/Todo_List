import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { AddTasks } from "../TodoSlice/TodoSlice";
import { v4 as uuidv4 } from "uuid";

uuidv4();

function TodoForm({ toDo }) {
  const [task, setTask] = useState("");
  const inputEl = useRef(null);
  const dispatch = useDispatch();

  useEffect(function () {
    inputEl.current.focus();
  }, []);

  function handleAdd(e) {
    e.preventDefault();
    if (task === "") return;
    const newTodo = {
      id: uuidv4(),
      task: task,
      isComplete: false,
      isEditing: false,
    };
    dispatch(AddTasks(newTodo));

    setTask("");
  }

  return (
    <form className="todo-form" onSubmit={handleAdd}>
      <input
        type="text"
        className="todo-input"
        placeholder="what is the task today?"
        value={task}
        ref={inputEl}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="todo-btn">Add Task</button>
    </form>
  );
}

export default TodoForm;
