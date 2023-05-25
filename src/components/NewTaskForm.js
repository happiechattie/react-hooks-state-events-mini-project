import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm(props) {

  const [text, setText] = useState('');
  const [category, setCategory] = useState('Code');

  function handleTextChange(e){
    setText(e.target.value);
  }

  function handleCategoryChange(e){
    setCategory(e.target.value);
  }

  // const [task, setTask] = useState({});

  // function makeTask(e){
  //   const newTask = {text: e.target.querySelector('input').value, category: e.target.querySelector('select').value}
  //   setTask(newTask);
  //   return newTask;
  // }

  // function handleSubmit(e){
  //   e.preventDefault();
  //   Promise.resolve(task).then(() => makeTask(e)).then((newTask) => {
  //     props.onTaskFormSubmit(newTask);
  //   })
  // }

  function handleSubmit(e){
    e.preventDefault();
    props.onTaskFormSubmit({
      id: text,
      text: text,
      category: category
    })
  }

  const categoryList = 
    props.CATEGORIES.map(category => {
      if (category !== 'All') return (<option key={uuid()}>{category}</option>)
      else return null
    });

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" onChange={handleTextChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange}>
          {categoryList}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
