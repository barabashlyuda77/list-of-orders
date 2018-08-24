import React from 'react';
import './Product.css';

const product = (props) => {
  return (
    <div className="product">{props.productName}</div>
  );
}

export default product;
