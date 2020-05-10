import React, { Component } from "react";
import CategoryItem from "./CategoryItem";
import PropTypes from "prop-types";

class Categories extends Component {

  render() {
    const { categories, getCategory } = this.props;

    let renderStruct = null;

    const categoriesStyle = {
      display: "grid",
      gridTemplateColumns: "1fr 1fr"
    }

    renderStruct = (
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
    );

    return renderStruct;
    
  };
  
}

Categories.propTypes = {
  categories : PropTypes.array.isRequired
}

export default Categories;
