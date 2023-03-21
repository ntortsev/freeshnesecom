import './scss/app.scss';
import Main from './pages/Main.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';

function App() {
  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories').then((res) => setCategories(res.data));

    axios.get('https://dummyjson.com/products').then((res) => setProducts(res.data.products));

    fetch('https://dummyjson.com/products?limit=10&select=price')
      .then((res) => res.json())
      .then(console.log);
  }, []);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  //filter categories
  const [selectCategory, setSelectCategory] = useState('');
  const [rangePrice, setRangePrice] = useState({ min: 0, max: 500 });

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${selectCategory ? selectCategory : null}`)
      .then((res) => setProducts(res.data.products));
  }, [selectCategory]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products?price=${rangePrice.min}`)
      .then((res) => setProducts(res.data.products));
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
              <Main changeCategory={changeCategory} categories={categories} products={products} />
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
        </Routes>
      </div>
    </div>
  );
}

export default App;
