import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { EditToDo, HandleDelete, HandleComplete } from "../TodoSlice/TodoSlice";

function TodoBox({ task }) {
  const dispatch = useDispatch();

  function handleEdit(id) {
    dispatch(EditToDo({ task, id }));
  }
  function handleComplete(id) {
    console.log(id);
    dispatch(HandleComplete({ id }));
  }
  function handleDelete(id) {
    dispatch(HandleDelete({ id }));
  }
  return (
    <div className="box">
      <div className="descrip">
        <p
          className={task.isComplete ? "complete" : "dis_task"}
          onClick={() => handleComplete(task.id)}
        >
          {task.task}
        </p>
      </div>

      <div className="icons">
        {!task.isComplete && (
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="icon"
            onClick={() => handleEdit(task.id)}
          />
        )}
        <FontAwesomeIcon
          icon={faTrashCan}
          className="icon"
          onClick={() => handleDelete(task.id)}
        />
      </div>
    </div>
  );
}

export default TodoBox;
