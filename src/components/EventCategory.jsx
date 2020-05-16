import React, { useContext }from 'react';
import PlaceItem from './PlaceItem';
import JoaContext from '../context/joa/joaContext';

const EventCategory = () => {
    const joaContext = useContext(JoaContext);

    const { events } = joaContext;

    const categoryStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto'
      }

    return (
        <div
            className="event-category-container">
            <div
                style={categoryStyle}>
                {events.map(item => (
                <PlaceItem
                    key = {item.id}
                    place={item}
                />
                ))}
            </div>
        </div>
    )
}

export default EventCategory
