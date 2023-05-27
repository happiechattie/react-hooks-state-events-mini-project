import React, { useState } from "react";

function CategoryFilter({CATEGORIES, categorySelected, changeCategory}) {

  const categoryList = CATEGORIES.map((category, i) =>
    {
      const className = 
        category === categorySelected ? "selected" : null
      

      return (<button
        key={i}
        onClick={e => handleCategory(category)}
        className={className}
      >
        {category}
      </button>);
    }
  );


  function handleCategory(category){
    changeCategory(category);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryList}
    </div>
  );
}

export default CategoryFilter;
