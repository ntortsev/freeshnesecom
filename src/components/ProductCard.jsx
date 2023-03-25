import React from "react";

function ProductCard({ obj, style }) {
  return (
    <>
      {style?.display === "flex" ? (
        <div className="product-card--flex">
          <img src={obj?.images[0]} alt="img" />
          <div className="product-card--flex__descr">
            <h1>{obj?.title}</h1>
            <span>Rating: {obj?.rating}</span>
            <p className="product-card--flex__descr-p">{obj?.description}</p>
            <ul>
              <li>
                Stock: <p>{obj?.stock}</p>
              </li>
              <li>
                Brand: <p>{obj?.brand}</p>
              </li>
            </ul>
          </div>
          <div className="product-card__pay">
            <span>{obj?.price} USD</span>
            <button>Product Detail</button>
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
}

export default ProductCard;
