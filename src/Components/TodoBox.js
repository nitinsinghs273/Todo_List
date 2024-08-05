import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faPenToSquare,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { EditToDo, HandleDelete, HandleComplete } from "../TodoSlice/TodoSlice";

function TodoBox({ task }) {
  // State to track if the task details are expanded
  const [isExpanded, setIsExpanded] = useState(false);
  const dispatch = useDispatch();

  // Function to handle task edit action
  function handleEdit(id) {
    dispatch(EditToDo({ task, id }));
  }

  // Function to handle task complete action
  function handleComplete(id) {
    dispatch(HandleComplete({ id }));
  }

  // Function to handle task delete action
  function handleDelete(id) {
    dispatch(HandleDelete({ id }));
  }

  // Function to toggle the expansion of task details
  function toggleExpand() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="container-todo">
      <div className="box">
        <div className="descrip">
          {/* Task description, clicking on it will toggle the complete status */}
          <p
            className={task.isComplete ? "complete" : "dis_task"}
            onClick={() => handleComplete(task.id)}
          >
            {task.task}
          </p>
        </div>

        <div className="icons">
          {/* Icon to toggle the expansion of task details */}
          <FontAwesomeIcon
            icon={isExpanded ? faChevronUp : faChevronDown}
            onClick={toggleExpand}
          />

          {/* Edit icon, visible only if the task is not complete */}
          {!task.isComplete && (
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="icon"
              onClick={() => handleEdit(task.id)}
            />
          )}

          {/* Delete icon */}
          <FontAwesomeIcon
            icon={faTrashCan}
            className="icon"
            onClick={() => handleDelete(task.id)}
          />
        </div>
      </div>

      {/* Expanded details of the task, shown when isExpanded is true */}
      {isExpanded && (
        <div className="expanded-details">
          <p className="description">{task.description}</p>
          <p className="timestamp">Last updated: {task.timestamp}</p>
        </div>
      )}
    </div>
  );
}

export default TodoBox;
