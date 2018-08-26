import React from 'react';
import './Orders.css';

import Order from './Order/Order.js';

const orders = (props) => {
  return (
    <div className="orders">
      {props.addedProducts.map((product) =>
        <Order
          product={product}
        />
      )}
    </div>
  );
}

export default orders;
