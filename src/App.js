import "./scss/app.scss";
import Main from "./pages/Main.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setCategories(res.data.slice(0, 8)));

    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products));
  }, []);

  //filter categories
  const [selectCategory, setSelectCategory] = useState("all");
  const [rangePrice, setRangePrice] = useState({ min: 0, max: 500 });

  //change category
  useEffect(() => {
    axios
      .get(
        `https://dummyjson.com/products/${
          selectCategory === "all" ? "" : `category/${selectCategory}`
        }`
      )
      .then((res) => setProducts(res.data.products));
  }, [selectCategory]);

  //change price
  useEffect(() => {
    axios
      .get(
        `https://dummyjson.com/products${
          selectCategory === "all" ? "" : `category/${selectCategory}`
        }`
      )
      .then((res) => {
        setProducts(
          res.data.products.filter(
            (product) =>
              Number(product.price) >= rangePrice.min &&
              Number(product.price) <= rangePrice.max
          )
        );
      });
  }, [rangePrice]);

  //function filter
  const changeCategory = (category) => {
    setSelectCategory(String(category));
  };

  const changeRangePrice = (obj) => {
    setRangePrice({ min: obj.min, max: obj.max });
  };
  return (
    <div className="container">
      <div className="App">
        <Routes>
          <Route
            path="/freeshnesecom/"
            element={
              <Main
                changeCategory={changeCategory}
                categories={categories}
                products={products}
              />
            }
          />
          <Route
            path="/freeshnesecom/products"
            element={
              <ProductsPage
                selectCategory={selectCategory}
                changeRangePrice={changeRangePrice}
                changeCategory={changeCategory}
                categories={categories}
                products={products}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
