import React  from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PlaceItem = props => {
    const { picture, name, id } = props.place;

    return (
        <Link to={`/details/${id}`} className='placeItem'>
            <img className='place-item-img' src={ picture } alt='place-img' onError={({ currentTarget }) => {
    currentTarget.onerror = null; // prevents looping
    currentTarget.src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/2560px-Flag_of_South_Korea.svg.png";
  }}/>
            <p className='name-center'> {name.en} </p>
        </Link>
    )
}

PlaceItem.propTypes = {
    place : PropTypes.object.isRequired
}

export default PlaceItem
