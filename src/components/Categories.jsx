import React, { Component } from "react";
import db from "../db/index";
import CategoryItem from "./CategoryItem";
import PropTypes from "prop-types";

class Categories extends Component {
  state = {
  };

  componentDidMount() {
  }

  render() {

    let renderStruct = null;

    const categoryStyle = {
      display: "grid",
      gridTemplateColumns: "1fr 1fr"
    }

    renderStruct = (
      <div
        className="categories-container"
        style={categoryStyle}
      >
        {/* {console.log("map categories ", this.props.categories)} */}
        {this.props.categories.map(category => (
          <CategoryItem
          key = {category.id}
          category={category}
          selectCategory={this.props.selectCategory}
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
