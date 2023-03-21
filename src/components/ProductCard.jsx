import React from "react";

function ProductCard({ obj }) {
  return (
    <div className="product-card">
      <img src={obj?.images[0]} alt="img" />
      <div className="product-card__info">
        <div className="product-card__descr">
          <h1>{obj?.title}</h1>
          <p>{obj?.description}</p>
        </div>
        <div className="product-card__pay">
          <span>{obj?.price} USD</span>
          <button>Buy now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
