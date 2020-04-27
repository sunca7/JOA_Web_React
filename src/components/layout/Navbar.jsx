import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./NavbarStyle.scss";

class Navbar extends Component {
  state = {
    navList: ""
  };

  // constructor(state) {
  //   super(state);

  //   this.state = { navList: document.getElementById("nav-lists") };
  // }

  componentDidMount() {
    this.setState = {
      navList: document.getElementById("nav-lists")
    };
  }

  Show = () => {
    this.state.navList.classList.add("_Menus-show");
  };

  Hide = () => {
    this.state.navList.classList.remove("_Menus-show");
  };

  render() {
    return (
      <div className="nav-container" style={navStyle}>
        <div
          className="logo"
          style={{ maxWidth: "250px", padding: "0 10px", overflow: "hidden" }}
        >
          <Link to="/">
            <img
              src={require("../../assets/logo.png")}
              alt="logo"
              style={{ maxWidth: "100%", maxHeight: "60px" }}
            />
          </Link>
        </div>
        <div className="navbar">
          <div className="icon-bar" id="bar" onClick={this.Show}>
            <i></i>
            <i></i>
            <i></i>
          </div>
          <ul id="nav-lists">
            <li className="close">
              <span id="close" onClick={this.Hide}>
                ×
              </span>
            </li>
            {/* <a> refreshes the Home page after coming back */}
            <li> 
              <Link to="/">Home</Link>  
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const navStyle = {
  width: "100%",
  height: "60px",
  backgroundColor: "#1b998b",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  overflow: "hidden"
};

export default Navbar;
