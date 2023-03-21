import React from "react";

function Menu({ categories, changeCategory }) {
  return (
    <div className="menu">
      {categories?.map((c) => (
        <p onClick={() => changeCategory(c)} key={c.id}>{c.name.charAt(0).toUpperCase() + c.name.slice(1)}</p>
      ))}
    </div>
  );
}

export default Menu;
