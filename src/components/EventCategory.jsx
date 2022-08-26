import React, { useContext, useEffect } from 'react';
import EventItem from './EventItem';
import JoaContext from '../context/joa/joaContext';
import Spinner from './layout/Spinner';
import Typography from '@material-ui/core/Typography';

const EventCategory = () => {
    const joaContext = useContext(JoaContext);
    const { getEvents, events, loading } = joaContext;

    useEffect(() => {
        getEvents();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (loading) return <Spinner />;
    return (
        <div className='event-category-container' >
            <Typography variant="h5" component="h5" align="center"> Events chez Vous</Typography>
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
