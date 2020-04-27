import React, { Component } from "react";
import db from "../db/index";
import Category from "./Category";
import PropTypes from "prop-types";

class Categories extends Component {
  state = {
    categories: [],
    places: [],
    selected: [],
    categoryId: ""
  };

  componentDidMount() {
    db.collection("places")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.state.places.push(doc.data());
        });
      });
  }

  selectCategory = id => {
    this.categoryId = id;
    this.selected = this.places.filter(i => i.category_id === this.categoryId);
  };

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
        {console.log("map categories ", this.props.categories)}
        {this.props.categories.map(category => (
          <Category
          key = {category.id}
          category={category}
          selectCategory={this.selectCategory}
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
