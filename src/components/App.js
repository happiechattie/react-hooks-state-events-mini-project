import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {

  const [categorySelected, setCategorySelected] = useState('All');

  function handleFilter(e){
    const buttons = document.querySelector('.categories').querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++) {
      buttons.item(i).className='';
    }
    e.target.className = 'selected';
    setCategorySelected(e.target.innerText)

  }

  const arrayToDisplay = (
    TASKS.filter(task => {
      if (categorySelected === 'All') return true;
      else return (task.category === categorySelected)})
  )

  const [array, setArray] = useState(TASKS)

  function handleSubmit(newTask){
    setArray([...array, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter handleFilter={handleFilter} CATEGORIES={CATEGORIES}/>
      <NewTaskForm onTaskFormSubmit={handleSubmit} CATEGORIES={CATEGORIES} />
      <TaskList array={array} categorySelected={categorySelected} TASKS={TASKS} />
    </div>
  );
}

export default App;
