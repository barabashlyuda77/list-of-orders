import React from 'react';
import './TotalPrise.css';

const displayTotal = (amount) => {
  if (amount <= 0) return 0;
  return amount;
}

const totalPrice = (props) => {

  return (
    <div className="totalPrice">
      <div>Total</div>
      <div>{`${displayTotal(props.totalPrice)} EUR`}</div>
    </div>
  );
}

export default totalPrice;
