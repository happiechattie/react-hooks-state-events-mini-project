import React, { useState } from "react";

function CategoryFilter(props) {



  return (
    <div className="categories">
      <h5>Category filters</h5>
      {props.CATEGORIES.map((category, i) => (
        <button key={i} onClick={props.handleFilter}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
