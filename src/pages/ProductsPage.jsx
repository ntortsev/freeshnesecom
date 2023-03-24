import React, {useState} from "react";
import {
  Header,
  Footer,
  Menu,
  ProductCard,
  Categories,
  PriceBlock,
  Rating,
} from "../components/index";
import { Link } from "react-router-dom";
import list from "../assets/list.svg";
import grid from "../assets/grid.svg";
function ProductsPage({
  categories,
  products,
  changeCategory,
  changeRangePrice,
  changeSelectItem,
  selectCategory,
}) {
  

  const styleList = {
    display: "flex",
    flexDirection: "column",
    gap: 32 + "px",
  };
  const styleGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 32 + "px",
  };

  const [style, setStyle] = useState(styleGrid);
  console.log(style)
  return (
    <div className="product-page">
      <Header categories={categories} />
      <Menu changeCategory={changeCategory} categories={categories} />
      <div className="product-page__header">
        <h1 className="product-page__category">{selectCategory}</h1>
        <div className="product-page__view">
          <div onClick={() => setStyle(styleGrid)}>
            <img width={20} src={grid} alt="grid" />
            Grid view
          </div>
          <div onClick={() => setStyle(styleList)}>
            <img width={20} src={list} alt="list" />
            List view
          </div>
        </div>
      </div>
      <div className="product-page__content">
        <div className="product-page__filters">
          <Categories changeCategory={changeCategory} categories={categories} />
          <Rating />
          <PriceBlock changeRangePrice={changeRangePrice} />
        </div>
        <div className="product-page__products" style={style}>
          {products?.map((product, index) => (
            <Link
              onClick={() => changeSelectItem(product)}
              key={index}
              to={"/freeshnesecom/products/item/" + product.id}
            >
              <ProductCard style={style} obj={product} />
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProductsPage;
