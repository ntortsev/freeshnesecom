import React from "react";
import {
  Header,
  Footer,
  Menu,
  ProductCard,
  Categories,
  PriceBlock,
  Rating,
} from "../components/index";

function ProductsPage({
  categories,
  products,
  changeCategory,
  changeRangePrice,
}) {
  return (
    <div className="product-page">
      <Header categories={categories} />
      <Menu changeCategory={changeCategory} categories={categories} />
      <div className="product-page__content">
        <div className="product-page__filters">
          <Categories changeCategory={changeCategory} categories={categories} />
          <Rating />
          <PriceBlock changeRangePrice={changeRangePrice} />
        </div>
        <div className="product-page__products">
          {products?.map((product) => (
            <ProductCard key={product.id} obj={product} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProductsPage;
