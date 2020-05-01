import React, { Component } from 'react'
import { Link } from "react-router-dom";

class PlaceItem extends Component {

    onClick = (id) => {
        // this.props.selectPlace(id);
      };

    render() {
        const { picture, name, id } = this.props.place;

        return (
            <div>
                <Link to={`/details/${name.en}`} className="categoryItem"
                style={{ position: "relative", textAlign: "center", color: "white" }}
                onClick={()=> this.onClick(id)}
            >
            <img
                src={ picture } 
                alt="place-img"
                className="place-img"
                style={{ opacity: "0.3", width: "40%", height: "40%" }}
              />
              <p className="name-center" style=
                {{ position: "absolute", top: "50%", left: "50%"}}>
                {name.en}
              </p>
            </Link>
            </div>
        )
    }
}

export default PlaceItem
