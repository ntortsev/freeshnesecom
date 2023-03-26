import React, { useEffect, useState } from "react";
import { Header, Menu, Footer } from "../components/index.js";
import heart from "../assets/heart.svg";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import arrow from "../assets/arrow.svg";

function ItemPage({
  categories,
  products,
  changeCategory,
  selectItem,
  changeSelectItem,
  setSelectItem,
  setProducts,
}) {
  const item = useParams();
  const [renderItem, setRenderItem] = useState({});
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products));
  }, []);

  useEffect(() => {
    const result = products.filter((p) => Number(p.id) === Number(item.id));
    setRenderItem(result[0]);
  }, [products]);

  return (
    <div className="item-page">
      <Header categories={categories} />
      <Menu changeCategory={changeCategory} categories={categories} />
      <div className="item-page__flex">
        <div className="item-page__images">
          {renderItem?.images?.slice(0, 3)?.map((image, i) => (
            <img key={i} src={image} alt="foto" />
          ))}
        </div>
        <div className="item-page__content">
          <h1>{renderItem?.title}</h1>
          <span>Rating: {renderItem?.rating}</span>
          <p>{renderItem?.description}</p>
          <ul>
            <li>
              Stock: <p>{renderItem?.stock}</p>
            </li>
            <li>
              Brand: <p>{renderItem?.brand}</p>
            </li>
          </ul>
          <div className="item-page__order">
            <p>{renderItem?.price} USD</p>
            <button>+ Add to cart</button>
          </div>
          <div className="item-page__favorite">
            <div>
              <img src={heart} alt="heart" />
              Add to my wish list
            </div>
            <Link to="/freeshnesecom/products">
              <button className="category-menu__btn">
              Back <img src={arrow} alt="arrow" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ItemPage;
