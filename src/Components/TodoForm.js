import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { AddTasks } from "../TodoSlice/TodoSlice";
import { v4 as uuidv4 } from "uuid";

function TodoForm() {
  // State to manage task and description input values
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  // Reference for the input field to focus on mount
  const inputEl = useRef(null);

  // Redux dispatch function for sending actions
  const dispatch = useDispatch();

  // Focus on input field when component mounts
  useEffect(() => {
    inputEl.current.focus();
  }, []);

  // Handle form submission
  function handleAdd(e) {
    e.preventDefault(); // Prevent default form submission

    // Ensure task and description are not empty
    if (task === "" || description === "") return;

    // Generate timestamp and ISO string for `updatedAt`
    const timestamp = new Date().toLocaleString();
    const updatedAt = new Date().toISOString();

    // Create new todo object with all required fields
    const newTodo = {
      id: uuidv4(), // Generate unique ID for the todo
      task: task, // Task description
      description: description, // Additional description
      isComplete: false, // Initial status of the todo
      isEditing: false, // Indicates if the todo is being edited
      updatedAt: updatedAt, // Timestamp of when the todo was created/updated
      timestamp: timestamp, // Human-readable date and time
    };

    // Dispatch action to add new todo to the Redux store
    dispatch(AddTasks(newTodo));

    // Clear input fields after adding the task
    setTask("");
    setDescription("");
  }

  return (
    <form className="todo-form" onSubmit={handleAdd}>
      <input
        type="text"
        className="todo-input"
        placeholder="What is the task today?"
        value={task}
        ref={inputEl} // Reference to focus input field
        onChange={(e) => setTask(e.target.value)} // Update state on input change
        required // Input is required for form submission
      />
      <input
        type="text"
        className="todo-input"
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)} // Update state on input change
        required // Input is required for form submission
      />
      <button className="todo-btn">Add Task</button>{" "}
      {/* Button to submit the form */}
    </form>
  );
}

export default TodoForm;
