import React from 'react';
import './Categories.css';

import Category from './Category/Category.js';
import Heading from '../Heading/Heading.js';

const listOfCategories = ['Fruits', 'Vegetables', 'Meat', 'Bread', 'Cheese', 'Snacks'];

const categories = (props) => {
  return (
    <div className="categories">
      <Heading header={'Categories'}/>
      {listOfCategories.map((category) =>
        <Category
            key={category}
            categoryName={category}
            onClick={props.onChange}
            isSelected={category === props.selectedCategory}
        />
      )}
    </div>
  );
}

export default categories;
