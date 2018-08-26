import React from 'react';
import './Product.css';

const product = (props) => {
  const addItem = () => {
    props.onClick(props.productName)
  };

  return (
    <div className="product">
      <div className="title">{props.productName}</div>
      <button
        className="add"
        onClick={addItem}>
          Add
      </button>
    </div>
  );
}

export default product;
