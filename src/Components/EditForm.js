import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { EditTask } from "../TodoSlice/TodoSlice";

function EditForm({ task }) {
  // State to manage form values for task and description
  const [values, setValues] = useState({
    task: task.task,
    description: task.description,
  });

  const inputEl = useRef(null); // Ref to focus input on mount
  const dispatch = useDispatch();

  // Focus the input field on mount
  useEffect(() => {
    inputEl.current.focus();
  }, []);

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    if (values.task === "" || values.description === "") return;

    // Dispatch edit task action with updated values
    dispatch(
      EditTask({
        id: task.id,
        ...values,
      })
    );

    // Reset form values after submission
    setValues({ task: "", description: "" });
  }

  // Handle changes to input fields
  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  return (
    <form className="edit_form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="edit-input"
        placeholder="Update task"
        name="task"
        ref={inputEl}
        value={values.task}
        onChange={handleChange}
      />
      <input
        type="text"
        className="edit-input"
        placeholder="Update description"
        name="description"
        value={values.description}
        onChange={handleChange}
      />
      <button className="edit-btn">Update </button>
    </form>
  );
}

export default EditForm;
