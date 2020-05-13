import React, { Component } from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

class CategoryItem extends Component {
  
  constructor(props) {
    super(props);
    this.state = {hovered: false};
  }

  onClick = (id) => {
    this.props.getCategory(id);
  };

  render () {
    const { picture, name, id } = this.props.category;

    return (
      <div>
        <Link to={`/${name.en}`} className="categoryItem"
            onMouseOver={() => this.setState({hovered: true})}
            onMouseOut={() => this.setState({hovered: false})}
            onClick={()=> this.onClick(id)}
            style={{ position: "relative", textAlign: "center", color: "white" }}
            >
            <img
                src={ picture } 
                alt="category-img"
                className="category-img"
                style={{ opacity: "1", width: "100%", height: "100%", transform: `${this.state.hovered ? 'opacity(0.3,1)' : null}` }}
              />
              <h1 className="name-center" style=
                {{ position: "absolute", top: "-800%", left: "30%"}}>
                {name.en}
              </h1>
            </Link>
          </div>
    );  
  }
}

CategoryItem.propTypes = {
  category : PropTypes.object.isRequired
}

export default CategoryItem;