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
    // Promise.resolve(selected).then(() => setSelected(selected => !selected)).then(() => {
    //   e.target.className = 'selected';
    // });
    // console.log(selected);

    e.target.className = 'selected';
    setCategorySelected(e.target.innerText)

  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter handleFilter={handleFilter} CATEGORIES={CATEGORIES}/>
      <NewTaskForm />
      <TaskList categorySelected={categorySelected} TASKS={TASKS} />
    </div>
  );
}

export default App;
