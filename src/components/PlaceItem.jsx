import React from 'react'
import { Link } from "react-router-dom";

const PlaceItem = props => {

    const { picture, name, id } = props.place;

    return (
        <div>
            <Link to={`/details/${id}`} className="categoryItem"
                style={{ position: "relative", textAlign: "center", color: "white" }}
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

export default PlaceItem
