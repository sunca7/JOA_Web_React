import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./NavbarStyle.scss";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.refNavList = React.createRef();
  }

  Show = () => {
    this.refNavList.current.classList.add("_Menus-show");
  };

  Hide = () => {
    this.refNavList.current.classList.remove("_Menus-show");
  };

  render() {

    return (
      <div className="nav-container sticky" id='navbar'>
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
          <div className="fas fa-bars fa-2x icon-bar" id="bar" onClick={this.Show}>
            <i></i>
            <i></i>
            <i></i>
          </div>
          <ul ref={this.refNavList} id="nav-lists">
            <li className="close">
              <span id="close" onClick={this.Hide}>
                ×
              </span>
            </li>
            {/* <a> refreshes the Home page after coming back */}
            <li> 
              <Link to="/" onClick={this.Hide}> Home</Link>  
            </li>
            <li>
              <Link to="/about" onClick={this.Hide}> About</Link>
            </li>
            <li>
              <Link to="/contact" onClick={this.Hide}> Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
