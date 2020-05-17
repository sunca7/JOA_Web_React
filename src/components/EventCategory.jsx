import React, { useContext } from 'react';
import EventItem from './EventItem';
import JoaContext from '../context/joa/joaContext';

const EventCategory = () => {
    const joaContext = useContext(JoaContext);
    const { events } = joaContext;

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

export default EventCategory
