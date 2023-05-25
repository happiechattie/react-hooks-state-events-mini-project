import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {

  const [categorySelected, setCategorySelected] = useState('All');
  const [array, setArray] = useState(TASKS)

  function changeCategory(category){
    const buttons = document.querySelector('.categories').querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++) {
      if (category === buttons.innerText) 
          buttons.item(i).className = 'selected';
        else
          buttons.item(i).className=null;
    }
    setCategorySelected(category)
  }

  const filteredArray = array.filter(task => {
      if (categorySelected === 'All') return true;
      else return (task.category === categorySelected)});


  function handleSubmit(newTask){
    setArray([...array, newTask]);
  }

  function handleDelete(taskText){
    setArray(array.filter(task => task.text !== taskText));
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter changeCategory={changeCategory} CATEGORIES={CATEGORIES}/>
      <NewTaskForm onTaskFormSubmit={handleSubmit} CATEGORIES={CATEGORIES} />
      <TaskList handleDelete={handleDelete} categorySelected={categorySelected} TASKS={filteredArray} />
    </div>
  );
}

export default App;
