import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PlaceItem = props => {

    const { picture, name, id } = props.place;

    return (
        <Link to={`/details/${id}`} className='placeItem'>
            <img className='place-item-img' src={ picture } alt='place-img'/>
            <p className='name-center'> {name.en} </p>
        </Link>
    )
}

PlaceItem.propTypes = {
    place : PropTypes.object.isRequired
}

export default PlaceItem
