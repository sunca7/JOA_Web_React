import React, { useContext, useEffect } from 'react';
import CategoryItem from './CategoryItem';
import PropTypes from 'prop-types';
import JoaContext from '../context/joa/joaContext';

const Categories = ({ categories, getCategory }) => {
  const joaContext = useContext(JoaContext);
  const { getCategories } = joaContext;

  useEffect(() => {
    return () => {
      getCategories();
    }
  }, []);

  const categoriesStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  }

  return ( 
    <div
      className="categories-container"
      style={categoriesStyle}
    >
      {categories.map(category => (
        <CategoryItem
          key = {category.id}
          category={category}
          getCategory={getCategory}
      />
      ))}
    </div>
  )};
  
Categories.propTypes = {
  categories : PropTypes.array.isRequired
}

export default Categories;
