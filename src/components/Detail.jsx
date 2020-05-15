import React, { Fragment, useEffect, useState, useContext } from 'react'
import PropTypes from 'prop-types';
import Spinner from './layout/Spinner';
import JoaContext from '../context/joa/joaContext';

const Detail = ({ match }) => {

    const joaContext = useContext(JoaContext);

    const { selectedPlace, loading, getPlace } = joaContext;

    useEffect(() => {
        getPlace(match.params.id);
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

    if (!selectedPlace)  return <Spinner />;
    else {
        console.log("place info ", selectedPlace);
        return (
            <div className='detail-container' style={detailStyle}>
                <Fragment>
                    <img src={selectedPlace.picture} alt="place-main-img" style={imageStyle}/>
                    <Fragment class="details-info" style={textStyle}>
                        {/* <p href={place.schedule.en || place.schedule.fr || ''}></p> */}
                        <p> {selectedPlace.phone} </p>
                        <p> {selectedPlace.address}</p>
                        <p> {selectedPlace.website}</p>
                        <p> Share </p>
                    </Fragment>
                </Fragment>
            </div>
        );
    }
}

Detail.propTypes = {
    loading : PropTypes.bool,
    place: PropTypes.object.isRequired, 
    getPlace: PropTypes.func.isRequired
}

export default Detail

