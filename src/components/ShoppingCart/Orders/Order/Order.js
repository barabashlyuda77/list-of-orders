import React from 'react';
import './Order.css';

const order = (props) => {
  const informApp = () => {
    props.sendProductName(props.product);
  }
  return (
    <div className="order">
      <div>{`1 x ${props.product}`}</div>
      <button className="delete" onClick={informApp}>Delete</button>
    </div>
  );
}

export default order;
