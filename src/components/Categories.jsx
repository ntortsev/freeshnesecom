import React from "react";

function Categories({ categories, changeCategory }) {
  return (
    <div className="categories">
      <h1>Categories</h1>
      <ul>
        {categories?.map((c, i) => (
          <li onClick={() => changeCategory(c)} key={i}>
            {c.charAt(0).toUpperCase() + c.slice(1)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
