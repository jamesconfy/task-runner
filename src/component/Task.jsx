import { FaTimes } from "react-icons/fa";

function Task({ task, onDelete, onToggle }) {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : "notreminder"}`}
      onDoubleClick={() => onToggle(task)}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task)}
        />
      </h3>
      <p>{task.date}</p>
    </div>
  );
}

export default Task;
