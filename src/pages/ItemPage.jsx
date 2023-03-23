import React, { useEffect, useState } from "react";
import { Header, Menu, CategoryMenu, Footer } from "../components/index.js";
import heart from '../assets/heart.svg'

function ItemPage({
  categories,
  products,
  changeCategory,
  selectItem,
  changeSelectItem,
}) {
  useEffect(() => {
    console.log(selectItem);
  }, []);

  return (
    <div className="item-page">
      <Header categories={categories} />
      <Menu changeCategory={changeCategory} categories={categories} />
      <div className="item-page__flex">
        <div className="item-page__images">
          {selectItem.images.slice(0, 3)?.map((image, i) => (
            <img key={i} src={image} alt="foto" />
          ))}
        </div>
        <div className="item-page__content">
          <h1>{selectItem?.title}</h1>
          <span>Rating: {selectItem?.rating}</span>
          <p>{selectItem?.description}</p>
          <ul>
            <li>
              Stock: <p>{selectItem?.stock}</p>
            </li>
            <li>
              Brand: <p>{selectItem?.brand}</p>
            </li>
          </ul>
          <div className="item-page__order">
            <p>{selectItem?.price} USD</p>
            <button>+ Add to cart</button>
          </div>
          <div className="item-page__favorite">
            <img src={heart} alt="heart" />
            Add to my wish list
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ItemPage;
