import React from "react";

function Menu({ categories, changeCategory }) {
  return (
    <div className="menu">
      {categories?.map((c) => (
        <p onClick={() => changeCategory(c)} key={c}>{c}</p>
      ))}
    </div>
  );
}

export default Menu;
