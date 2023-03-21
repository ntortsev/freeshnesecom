import React from 'react'
import {Header, Menu, CategoryMenu, Footer} from '../components/index.js'

function Main({categories, products, changeCategory}) {
  return (
    <div className="main-page">
      <Header categories={categories} />
      <Menu categories={categories} changeCategory={changeCategory} />
      <CategoryMenu categories={categories} products={products} />
      <Footer />
    </div>
  )
}

export default Main