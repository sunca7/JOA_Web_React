import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const CategoryItem = (props) => {
  const { picture, name } = props.category;

  let urlParam = null;
  if (name.en === 'Events') 
    urlParam = 'Events'; 
  else
    urlParam = name.en;

  return (
      <Link to={`/${urlParam}`} className="categoryItem">
        <img className="category-img" src={ picture } alt="category-img" />
        <h1 className="name-center" > {name.en || name.fr || name.kr} </h1>
      </Link>
  );  
}

CategoryItem.propTypes = {
  category : PropTypes.object.isRequired
}

export default CategoryItem;