import React from 'react';
import './Order.css';

import listOfProducts from '../../../../itemsList.js';

const order = () => {
  return (
    <div className="order">
      <div>{`1 x Banana`}</div>
      <button className="delete">Delete</button>
    </div>
  );
}

export default order;
