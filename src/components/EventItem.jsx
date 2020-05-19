import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const EventItem = props => {
    const { picture, name, id } = props.event;

    return (
        <Link to={`/event/${id}`} className='eventItem placeItem'>
            <img className='event-img' src={ picture } alt='event-img'/>
            <p className='name-center' > {name.en || ''} </p>
        </Link>
    )
}

EventItem.propTypes = {
    event : PropTypes.object.isRequired
}

export default EventItem