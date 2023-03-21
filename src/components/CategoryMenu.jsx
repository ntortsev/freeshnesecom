import React from "react";
import { ProductCard } from "./index.js";
import arrow from "../assets/arrow.svg";
import { Link } from "react-router-dom";

function CategoryMenu({ categories, products }) {
  return (
    <div className="category-menu">
      <div className="category-menu__categories">
        <div>
          <h1>Best selling products</h1>
          <div>
            {categories.map((c, i) => (
              <p key={i}>
                {c}
              </p>
            ))}
          </div>
        </div>
        <Link to="/products">
          <button className="category-menu__btn">
            More products <img src={arrow} alt="arrow" />
          </button>
        </Link>
      </div>
      <div className="category-menu__products">
        {products.slice(0, 3).map((product, index) => (
          <ProductCard key={index} obj={product} />
        ))}
      </div>
    </div>
  );
}

export default CategoryMenu;
