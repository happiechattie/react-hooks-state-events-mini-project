import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm(props) {

  const [task, setTask] = useState({});

  function makeTask(e){
    const newTask = {text: e.target.querySelector('input').value, category: e.target.querySelector('select').value}
    setTask(newTask);
    return newTask;
  }

  function handleSubmit(e){
    e.preventDefault();
    Promise.resolve(task).then(() => makeTask(e)).then((newTask) => {
      props.onTaskFormSubmit(newTask);
    })
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {props.CATEGORIES.map((category) => {
            if (category === "All") return null;
            else return (<option key={uuid()}>{category}</option>)
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
