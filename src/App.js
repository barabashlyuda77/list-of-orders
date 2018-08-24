import React, { Component } from 'react';
import './App.css';

import Categories from './components/Categories/Categories.js';
import ProductList from './components/ProductList/ProductList.js';
import ShoppingCart from './components/ShoppingCart/ShoppingCart.js';

class App extends Component {
  state = {
    category: 'Fruits'
  };

  changeCategory = (category) => {
    this.setState({ category });
  }

  render() {
    return (
      <div className="app">
        <Categories
          onChange={this.changeCategory}
          selectedCategory={this.state.category}
        />
        <ProductList
          category={this.state.category}
        />
        <ShoppingCart />
      </div>
    );
  }
}

export default App;
