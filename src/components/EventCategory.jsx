import React, { useContext, useEffect } from 'react';
import EventItem from './EventItem';
import JoaContext from '../context/joa/joaContext';
import Spinner from './layout/Spinner';

const EventCategory = () => {
    const joaContext = useContext(JoaContext);
    const { getEvents, events } = joaContext;

    useEffect(() => {
        getEvents();
        // eslint-diable-next-line
    }, [])

    if (!events) {
        return <Spinner />;
      } else {
        return (
            <div className='event-category-container' >
                <div className='event-category-grid' >
                    {events.map(item => (
                    <EventItem
                        key = {item.id}
                        event={item} /> ))}
                </div>
            </div>
        )
    }
}

export default EventCategory
