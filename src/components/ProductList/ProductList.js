import React from 'react';
import './ProductList.css';

import Heading from '../Heading/Heading.js';
import Product from './Product/Product.js';

import listOfProducts from '../../itemsList.js';

const productList = (props) => {
  return (
    <div className="productList">
      <Heading header={'Product list'} />
      {listOfProducts[props.category].map((item) =>
        <Product
          key={item.name}
          productName={item.name}
          onClick={props.onAdd}
        />
      )}
    </div>
  );
}

export default productList;
