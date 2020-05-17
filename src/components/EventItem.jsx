import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const EventItem = props => {

    const { picture, name, id } = props.event;

    return (
        <Fragment>
            <Link to={`/event/${id}`} className='categoryItem'
                style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
                <img
                    src={ picture } 
                    alt='place-img'
                    className='place-img'
                    style={{ opacity: '0.3', width: '30vw', height: '30vh', 
                            flex: '1', resizeMode: 'contain' }}/>
                <p className='name-center' style=
                    {{ position: 'absolute', top: '30%', left: '40%'}}>
                    {name.en || ''}
                </p>
            </Link>
        </Fragment>
    )
}

EventItem.propTypes = {
    event : PropTypes.object.isRequired
}

export default EventItem