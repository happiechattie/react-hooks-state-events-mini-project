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
    setCategorySelected(category)
  }

  const filteredArray = array.filter(task => categorySelected === "All" || task.category === categorySelected);


  function handleSubmit(newTask){
    setArray([...array, newTask]);
  }

  function handleDelete(taskText){
    setArray(array.filter((task) => task.text !== taskText));
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categorySelected={categorySelected} changeCategory={changeCategory} categories={CATEGORIES}/>
      <NewTaskForm onTaskFormSubmit={handleSubmit} categories={CATEGORIES} />
      <TaskList handleDelete={handleDelete} categorySelected={categorySelected} tasks={filteredArray} />
    </div>
  );
}

export default App;
