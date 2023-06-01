import React from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";

function TaskList({tasks, handleDelete}) {

  const taskList = tasks.map(task => (
    <Task
      handleDelete={handleDelete}
      key={uuid()}
      className='task'
      text={task.text}
      category={task.category}/>
  ))

  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
