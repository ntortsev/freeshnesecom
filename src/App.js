import "./scss/app.scss";
import Main from "./pages/Main.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/categories")
      .then((res) => setCategories(res.data));

    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => setProducts(res.data));
  }, []);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  //filter categories
  const [selectCategory, setSelectCategory] = useState({ id: 1 });
  const [rangePrice, setRangePrice] = useState({ min: 0, max: 500 });

  useEffect(() => {
    axios
      .get(
        `https://api.escuelajs.co/api/v1/products/?categoryId=${selectCategory.id}`
      )
      .then((res) => setProducts(res.data));
  }, [selectCategory]);

  useEffect(() => {
    axios
      .get(
        `https://api.escuelajs.co/api/v1/products/?price_min=${rangePrice.min}&price_max=${rangePrice.max}`
      )
      .then((res) => setProducts(res.data));
  }, [rangePrice]);

  //function filter
  const changeCategory = (category) => {
    setSelectCategory(category);
  };

  const changeRangePrice = (obj) => {
    setRangePrice({ min: obj.min, max: obj.max });
  };
  return (
    <div className="container">
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Main
                changeCategory={changeCategory}
                categories={categories}
                products={products}
              />
            }
          />
          <Route
            path="/products"
            element={
              <ProductsPage
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
