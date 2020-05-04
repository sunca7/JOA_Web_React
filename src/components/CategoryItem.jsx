import React, { Component } from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

class CategoryItem extends Component {
  
  onClick = (id) => {
    this.props.getCategory(id);
  };

  render () {
    const { picture, name, id } = this.props.category;

    return (
      <div>
        <Link to={`/${name.en}`} className="categoryItem"
            style={{ position: "relative", textAlign: "center", color: "white" }}
            onClick={()=> this.onClick(id)}
            
            >
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
            </Link>
          </div>
    );  
  }
}

CategoryItem.propTypes = {
  category : PropTypes.object.isRequired
}

export default CategoryItem;