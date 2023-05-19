import React from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";

function TaskList(props) {

  console.log(document.querySelector('.categories'));

  const arrayToDisplay = (
    props.TASKS.filter(task => {
      if (props.categorySelected === 'All') return true;
      else return (task.category === props.categorySelected)})
  )

  return (
    <div className="tasks">
      {arrayToDisplay.map((task) => (
        <Task key={uuid()} text={task.text} category={task.category} />
      ))}
    </div>
  );
}

export default TaskList;
