import React, { useState } from "react";

function CategoryFilter(props) {

  function handleCategory(category){
    props.changeCategory(category);
  }

  const categoryList = props.CATEGORIES.map((category, i) => (
    <button key={i} onClick={e => handleCategory(category)}>{category}</button>
  ))

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryList}
    </div>
  );
}

export default CategoryFilter;
