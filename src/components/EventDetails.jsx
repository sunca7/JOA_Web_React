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
   
    const imageStyle = {
        width : '50%'
    }

    const detailStyle = {
        marginTop: '20px',
        width: '80vw',
        height: '80vh',
        marginLeft: 'auto',
        marginRight: 'auto'
        // background: $accent-color
    }

    const textStyle = {
        color: 'black',
        margin: '2vw',
        fontSize: '3vw'
    }

    if (!event)  return <Spinner />;
    else {
        console.log("event info ", event);
        return (
            <div className='detail-container' style={detailStyle}>
                <Fragment>
                    <img src={event.picture} alt="place-main-img" style={imageStyle}/>
                    <Fragment class="details-info" style={textStyle}>
                        <p> Share </p>
                    </Fragment>
                </Fragment>
            </div>
        );
    }
}

export default EventDetail