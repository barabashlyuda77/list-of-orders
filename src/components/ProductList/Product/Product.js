import React from 'react';
import './Product.css';

const product = (props) => {
  return (
    <div className="product">
      <div className="title">{props.productName}</div>
      <button className="add">Add</button>
    </div>
  );
}

export default product;
