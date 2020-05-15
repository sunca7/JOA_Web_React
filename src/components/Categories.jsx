import React, { useContext, useEffect } from 'react';
import CategoryItem from './CategoryItem';
import JoaContext from '../context/joa/joaContext';
import Spinner from './layout/Spinner';

const Categories = () => {
  const joaContext = useContext(JoaContext);

  const { categories, loading, getCategories } = joaContext;

  const categoriesStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  }

  useEffect(() => {
    getCategories();
    // eslint-diable-next-line
}, [])

  // console.log("context categories ", categories);
  // console.log("categories loading ", loading);

  if (!categories) {
    // console.log("nothing 2");
    return <Spinner />;
  } else {
    return ( 
      <div
        className="categories-container"
        style={categoriesStyle}
      >
        {categories.map(category => (
          <CategoryItem
            key = {category.id}
            category={category}
        />
        ))}
      </div>
    )};
}
  
export default Categories;
