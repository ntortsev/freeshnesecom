import React from "react";
import { Link } from "react-router-dom";

function Menu({ categories, changeCategory }) {
  return (
    <div className="menu">
      <p onClick={() => changeCategory("all")}>All</p>
      {categories?.map((c) => (
        <Link key={c} to="/freeshnesecom/products">
          <p onClick={() => changeCategory(c)}>
            {c.charAt(0).toUpperCase() + c.slice(1)}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default Menu;
