import React, { useState } from "react";

function Task(props) {

  function handleDelete(e){
    e.target.parentNode.remove();
  }

  const [selected, setSelected] = useState(false);

  function handleFilter(e){
    Promise.resolve(selected).then(() => setSelected(!selected)).then(() => {
      console.log(selected);
      selected ? e.target.className = 'selected' : e.target.className = '';
    })
  }

  return (
    <div className="task">
      <div className="label">{props.category}</div>
      <div className="text">{props.text}</div>
      <button onClick={handleDelete} className="delete">X</button>
    </div>
  );
}

export default Task;
