import React from "react";
import PropTypes from 'prop-types'

const Category = ({ category: { picture, name } }) => {
  return (
    <div className="category"
          style={{ position: "relative", textAlign: "center", color: "white" }}>
           <img
              src={ picture } 
              alt="category-img"
              className="category-img"
              style={{ opacity: "0.3", width: "100%", height: "100%" }}
            />
             <h1 className="name-center" style=
              {{ position: "absolute", top: "50%", left: "50%"}}>
               {name.en}
            </h1>
        </div>
  );  
};

Category.propTypes = {
  category : PropTypes.object.isRequired
}

export default Category;