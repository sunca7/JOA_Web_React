import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./layout/Navbar";
import Categories from "./Categories";
import db from "../db/index";

class Home extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    const { categories } = this.state;

    db.collection("categories")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach((doc) => (
          categories.push({
            id: doc.id,
                  name: doc.data().name,
                  order: doc.data().order,
                  picture: doc.data().picture,
                  type : doc.data().type
          })
      ))
      this.setState({ categories })
      });
    console.log(categories);
  }

  render() {
    let renderStruct = null;

    renderStruct = (
      <Router>
        <div>
          <Navbar />
          <Categories categories={this.state.categories} />
        </div>
      </Router>
    )

    return renderStruct;
  }
}

export default Home;
