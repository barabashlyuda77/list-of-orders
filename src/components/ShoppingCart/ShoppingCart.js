import React, { Component } from 'react';
import './ShoppingCart.css';

import Heading from '../Heading/Heading.js';
import Orders from './Orders/Orders.js';
import TotalPrice from './TotalPrise/TotalPrise.js';

class ShoppingCart extends Component {
  state = {
    totalPrice: 0
  }

  // updateTotal = (amount = 0) => {
  //   const total = {...this.state};
  //   const updatedTotal = total.totalPrice + amount;
  //   this.setState({ totalPrice: updatedTotal })
  // }

  render() {
    return (
      <div className="shoppingCart">
        <Heading header={'Shoping cart'} />
        <Orders
          addedProducts={this.props.selectedProducts}
          sendProductName={this.props.activateDelete}
        />
        <TotalPrice
          totalPrice={this.state.totalPrice}
        />
      </div>
    );
  }
}

export default ShoppingCart;
