import "./scss/app.scss";
import Main from "./pages/Main.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import ItemPage from "./pages/ItemPage";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

function App() {
  //item page
  const [selectItem, setSelectItem] = useState();

  useEffect(() => {
    localStorage.setItem(
      "item-block",
      JSON.stringify(products.find((p) => p === selectItem))
    );
  }, [selectItem]);

  const changeSelectItem = (obj) => {
    setSelectItem(obj);
  };

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setCategories(res.data.slice(0, 8)));

    axios
      .get("https://dummyjson.com/products?limit=10&skip=10")
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
    const filtredProductsByPrice = products.filter(
      (product) =>
        Number(product.price) >= rangePrice.min &&
        Number(product.price) <= rangePrice.max
    );
    if (filtredProductsByPrice.length) {
      setProducts(filtredProductsByPrice);
    } else {
      console.log("Такой цены нет");
    }
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
                changeSelectItem={changeSelectItem}
              />
            }
          />
          <Route
            path="/freeshnesecom/products"
            element={
              <ProductsPage
                changeRangePrice={changeRangePrice}
                changeCategory={changeCategory}
                categories={categories}
                products={products}
              />
            }
          />
          <Route
            path="/freeshnesecom/products/item/"
            element={
              <ItemPage
                changeCategory={changeCategory}
                categories={categories}
                products={products}
                selectItem={selectItem}
                changeSelectItem={changeSelectItem}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
