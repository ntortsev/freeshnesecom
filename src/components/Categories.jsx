import React from "react";

function Categories({ categories, changeCategory }) {
  return (
    <div className="categories">
      <h1>Categories</h1>
      <ul>
        {categories?.map((c, i) => (
          <li onClick={() => changeCategory(c)} key={i}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
