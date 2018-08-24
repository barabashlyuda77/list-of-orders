import React from 'react';
import './Heading.css';

const heading = (props) => {
  return (
    <div className="heading">{props.header}</div>
  );
}

export default heading;
