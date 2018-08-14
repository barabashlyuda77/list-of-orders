import React, { Component } from 'react';
import './App.css';

import Categories from './components/Categories/Categories.js';
import ProductList from './components/ProductList/ProductList.js';
import ShoppingCart from './components/ShoppingCart/ShoppingCart.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Categories />
        <ProductList />
        <ShoppingCart />
      </div>
    );
  }
}

export default App;
