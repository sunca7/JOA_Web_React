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
    db.collection("categories")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.state.categories.push(doc.data());
        });
      });
    console.log(this.state.categories);
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Categories categories={this.state.categories} />
        </div>
      </Router>
    );
  }
}

export default Home;
