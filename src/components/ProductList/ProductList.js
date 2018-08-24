import React from 'react';
import './ProductList.css';

import Heading from '../Heading/Heading.js';
import Product from './Product/Product.js';

const listOfProducts = {
  Fruits: ['Mango', 'Apple', 'Kiwi', 'Banana', 'Apricots', 'Cherimoya', 'Grapefruit'],
  Vegetables: ['Cabbage', 'Cauliflower', 'Cucumber', 'Eggplant', 'Mushrooms'],
  Meat: ['Beef', 'Chicken', 'Beef ribs'],
  Bread: ['Bagel', 'Banana bread', 'Beer bread', 'Black bread', 'Borodinsky'],
  Cheese: ['Roquefort', 'Camembert', 'Cotija', 'Feta', 'Mozzarella', 'Emmental'],
  Snacks: ['Crêpe', 'Doughnut', 'Pancakes', 'Chocolate', 'Nougat']
};

const productList = (props) => {
  return (
    <div className="productList">
      <Heading header={'Product list'} />
      {listOfProducts[props.category].map((item) =>
        <Product
          key={item}
          productName={item}
        />
      )}
    </div>
  );
}

export default productList;
