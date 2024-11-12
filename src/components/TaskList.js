import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task
          key={index}
          text={task.text}
          category={task.category}
          onDelete={() => onDelete(task.id)}
        />
      ))}
    </div>
  );
}

export default TaskList;
