import React, { useState } from "react";

function Task(props) {

  function handleClick(e){
    props.handleDelete(props.text);
  }

  return (
    <div className="task">
      <div className="label">{props.category}</div>
      <div className="text">{props.text}</div>
      <button onClick={handleClick} className="delete">X</button>
    </div>
  );
}

export default Task;
