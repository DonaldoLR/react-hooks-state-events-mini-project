import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDelete }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task key={index} taskObj={task} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default TaskList;
