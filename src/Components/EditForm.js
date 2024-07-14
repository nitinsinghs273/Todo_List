import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { EditTask } from "../TodoSlice/TodoSlice";

function EditForm({ task, toDo }) {
  const [values, setValues] = useState(task.task);
  const inputEl = useRef(null);
  const dispatch = useDispatch();
  useEffect(function () {
    inputEl.current.focus();
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (values === "") return;
    dispatch(EditTask({ id: task.id, task: values }));
    setValues("");
  }

  return (
    <form className="edit_form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="edit-input"
        placeholder="Mention Updates"
        ref={inputEl}
        value={values}
        onChange={(e) => setValues(e.target.value)}
      />
      <button className="edit-btn">Update </button>
    </form>
  );
}

export default EditForm;
