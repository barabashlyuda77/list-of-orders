import React from 'react';
import './ShoppingCart.css';

import Heading from '../Heading/Heading.js';
import Orders from './Orders/Orders.js';
import TotalPrice from './TotalPrise/TotalPrise.js';

const shoppingCart = (props) => {
  return (
    <div className="shoppingCart">
      <Heading header={'Shoping cart'} />
      <Orders
        addedProducts={props.selectedProducts}
        sendProductName={props.activateDelete}
      />
      <TotalPrice />
    </div>
  );
}

export default shoppingCart;
