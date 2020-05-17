import React, { Fragment, useEffect, useState, useContext } from 'react'
import Spinner from './layout/Spinner';
import JoaContext from '../context/joa/joaContext';

const EventDetail = ({ match }) => {

    const joaContext = useContext(JoaContext);

    const { event, loading, getEventItem } = joaContext;

    useEffect(() => {
        getEventItem(match.params.id);
        // eslint-diable-next-line
    }, [])

    if (!event)  return <Spinner />;
    else {
        console.log("event info ", event);
        return (
            <div className='detail-container'>
                <img className='detail-img' src={event.picture} alt="place-main-img"/>
                <div className="details-info" >
                    <p> Share </p>
                </div>
            </div>
        );
    }
}

export default EventDetail