import React, { useContext } from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import JoaContext from '../context/joa/joaContext';

const CategoryItem = (props) => {
  const joaContext = useContext(JoaContext);
  const { getCategory } = joaContext;

  const { picture, name, id } = props.category;

  const onClick = (id) => {
    getCategory(id);
  };

  return (
      <Link to={`/${name.en}`}
            className="categoryItem" 
            onClick={()=> onClick(id)}>
          <img className="category-img" src={ picture } alt="category-img" />
          <h1 className="name-center" > {name.en} </h1>
      </Link>
  );  
}

CategoryItem.propTypes = {
  category : PropTypes.object.isRequired
}

export default CategoryItem;