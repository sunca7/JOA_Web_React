import React, { Component } from "react";
import CategoryItem from "./CategoryItem";
import PropTypes from "prop-types";

class Categories extends Component {
  // state = {
  // };

  // componentDidMount() {
  // }

  render() {
    const { categories, selectCategory } = this.props;

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
        {/* {console.log("map categories ", this.props.categories)} */}
        {categories.map(category => (
          <CategoryItem
            key = {category.id}
            category={category}
            selectCategory={selectCategory}
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
