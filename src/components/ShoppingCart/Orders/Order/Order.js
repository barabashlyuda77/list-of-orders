import React from 'react';
import './Order.css';

import listOfProducts from '../../../../itemsList.js';

const order = (props) => {
  return (
    <div className="order">
      <div>{`1 x ${props.product}`}</div>
      <button className="delete">Delete</button>
    </div>
  );
}

export default order;
