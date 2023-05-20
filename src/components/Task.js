import React, { useState } from "react";

function Task(props) {

  function handleDelete(e){
    e.target.parentNode.remove();
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
