import React from 'react';
import './Orders.css';

import Order from './Order/Order.js';

const orders = (props) => {
  return (
    <div className="orders">
      {props.addedProducts.map((product, index) =>
        <Order
          product={product}
          key={index}
          sendProductName={props.sendProductName}
        />
      )}
    </div>
  );
}

export default orders;
