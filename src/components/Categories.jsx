import React, { useContext, useEffect } from 'react';
import CategoryItem from './CategoryItem';
import JoaContext from '../context/joa/joaContext';
import Spinner from './layout/Spinner';

const Categories = () => {
  const joaContext = useContext(JoaContext);

  const { categories, loading, getCategories } = joaContext;

  useEffect(() => {
    getCategories();
    // eslint-diable-next-line
}, [])

  if (!categories) {
    return <Spinner />;
  } else {
    return ( 
      <div className="categories-container">
        {categories.map(category => (
          <CategoryItem
            key = {category.id}
            category={category} /> ))}
      </div>
    )};
}
  
export default Categories;
