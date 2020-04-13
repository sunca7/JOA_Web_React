import React, { Component } from "react";
import db from "../db/index";
import Category from "./Category";

class Categories extends Component {
  state = {
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

    renderStruct = (
      <div
        className="categories-container"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
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
  }
}

export default Categories;
