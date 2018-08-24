import React from 'react';
import './Category.css';

const getClassName = (categoryStatus) => categoryStatus === true ? 'category active': 'category';

const category = (props) => {
  const changeCategory = () => {
    props.onClick(props.categoryName);
  }

  const categoryClassName = getClassName(props.isSelected);

  return (
    <div
      className={categoryClassName}
      onClick={changeCategory}>
        {props.categoryName}
    </div>
  );
}

export default category;
