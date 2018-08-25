import React from 'react';
import './TotalPrise.css';

const totalPrice = (props) => {
  return (
    <div className="totalPrice">
      <div>Total</div>
      <div>{`25 EUR`}</div>
    </div>
  );
}

export default totalPrice;
