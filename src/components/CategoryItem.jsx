import React, { useContext } from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import JoaContext from '../context/joa/joaContext';

const CategoryItem = (props) => {
  
  const joaContext = useContext(JoaContext);

  const { getCategory } = joaContext;

  const onClick = (id) => {
    getCategory(id);
  };

  const { picture, name, id } = props.category;

  return (
    <div>
      <Link to={`/${name.en}`} className="categoryItem"
          onClick={()=> onClick(id)}
          style={{ position: "relative", textAlign: "center", color: "white" }}
          >
          <img
              src={ picture } 
              alt="category-img"
              className="category-img"
              style={{ opacity: "1", width: "100%", height: "100%" }}
            />
            <h1 className="name-center" style=
              {{ position: "absolute", top: "-800%", left: "30%"}}>
              {name.en}
            </h1>
          </Link>
        </div>
  );  
}

CategoryItem.propTypes = {
  category : PropTypes.object.isRequired
}

export default CategoryItem;