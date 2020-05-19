import React, { useContext, useEffect } from 'react';
import EventItem from './EventItem';
import JoaContext from '../context/joa/joaContext';
import Spinner from './layout/Spinner';

const EventCategory = () => {
    const joaContext = useContext(JoaContext);
    const { getEvents, events, loading } = joaContext;

    useEffect(() => {
        getEvents();
        // eslint-diable-next-line
    }, [])

    if (loading) return <Spinner />;
    return (
        <div className='event-category-container' >
            <div className='event-category-grid category-grid' >
                {events.map(item => (
                <EventItem
                    key = {item.id}
                    event={item} /> ))}
            </div>
        </div>
    );
}

export default EventCategory
