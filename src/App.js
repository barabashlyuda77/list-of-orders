import React, { Component } from 'react';
import './App.css';

import Categories from './components/Categories/Categories.js';
import ProductList from './components/ProductList/ProductList.js';
import ShoppingCart from './components/ShoppingCart/ShoppingCart.js';

class App extends Component {
  state = {
    category: 'Fruits',
    products: []
  };

  changeCategory = (category) => {
    this.setState({ category });
  }

  addProduct = (product) => {
    const products = [...this.state.products, product];
    this.setState({ products });
  }

  deleteProduct = (product) => {
    const products = [...this.state.products];
    products.splice(products.indexOf(product), 1);
    this.setState({ products });
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
          onAdd={this.addProduct}
        />
        <ShoppingCart
          selectedProducts={this.state.products}
          activateDelete={this.deleteProduct}
        />
      </div>
    );
  }
}

export default App;
