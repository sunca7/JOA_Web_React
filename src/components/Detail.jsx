import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import Spinner from './layout/Spinner';

const Detail = ({ place, loading, match, getPlace }) => {

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
        color: 'white',
        margin: '2vw',
        fontSize: '3vw'
    }

    if (!place)  return <Spinner />;
    else {
        console.log("place info ", place);
        return (
            <div className='detail-container' style={detailStyle}>
                <Fragment>
                    <img src={place.picture} alt="place-main-img" style={imageStyle}/>
                    <div class="details-info" style={textStyle}>
                        <p href={place.schedule.en || place.schedule.fr}></p>
                        <p> {place.phone} </p>
                        <p> {place.address}</p>
                        <p> {place.website}</p>
                        <p> Share </p>
                    </div>
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

