import React from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";

function TaskList(props) {

  console.log(props.array);

  return (
    <div className="tasks">
      {props.array.map((task) => (
        <Task key={uuid()} className='task' text={task.text} category={task.category} />
      ))}
    </div>
  );
}

export default TaskList;
