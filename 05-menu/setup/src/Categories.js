import React from "react";

const Categories = ({ categories, myItems }) => {
  return (
    <div className="btn-container">
      {
        categories.map((category, index) => {
          return (
            <div className="" key={index}>
            <button className="filter-btn" onClick={()=> myItems(category)}>
            {category}
          </button>
            </div>
          )
        })
     }
    </div>
  );
};

export default Categories;
