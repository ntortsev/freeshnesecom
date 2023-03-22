import React from "react";

function Menu({ categories, changeCategory }) {
  return (
    <div className="menu">
      <p onClick={() => changeCategory("all")}>All</p>
      {categories?.map((c) => (
        <p onClick={() => changeCategory(c)} key={c}>
          {c.charAt(0).toUpperCase() + c.slice(1)}
        </p>
      ))}
    </div>
  );
}

export default Menu;
