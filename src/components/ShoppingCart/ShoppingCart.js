import React, { Component } from 'react';
import './ShoppingCart.css';

import Heading from '../Heading/Heading.js';
import Orders from './Orders/Orders.js';
import TotalPrice from './TotalPrise/TotalPrise.js';

import priceList from '../../priseList.js';

class ShoppingCart extends Component {
  getPrice = item => priceList[item];

  render() {
    const totalPrice = this.props.selectedProducts
      .reduce((temporaryPrice, item) => temporaryPrice + this.getPrice(item), 0);

    return (
      <div className="shoppingCart">
        <Heading header={'Shoping cart'} />
        <Orders
          addedProducts={this.props.selectedProducts}
          sendProductName={this.props.activateDelete}
        />
        <TotalPrice
          totalPrice={totalPrice}
        />
      </div>
    );
  }
}

export default ShoppingCart;
