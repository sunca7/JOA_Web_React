import React, { Component } from "react";

class Category extends Component {
  render() {
    console.log("categories ", this.props.categories);
    return (
      <div className="category">
        {this.props.categories.map(
          function(category, i) {
            return <h3 key={i}>hi</h3>;
          }
          // <div
          //   className="category"
          //   onClick={this.props.selectCategory}
          //   style={{ position: "relative", textAlign: "center", color: "white" }}
          // >
          //   {/* <a href="#"> */}
          //   <img
          //     src={require(`"${category.picture}"`)}
          //     alt="category-img"
          //     className="category-img"
          //     style={{ opacity: "0.3", width: "100%", height: "100%" }}
          //   />
          //   {/* </a> */}
          //   <h1 className="name-center">
          //     {category.name.en} style=
          //     {{
          //       position: "absolute",
          //       top: "50%",
          //       left: "50%",
          //       transform: "translate(" - (50 % ", ") - (50 % ")")
          //     }}
          //   </h1>
          // </div>
        )}
      </div>
    );
  }
}

export default Category;
