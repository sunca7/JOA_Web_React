import React, { Fragment, useEffect, useState, useContext } from 'react'
import './Components.scss';
import Spinner from './layout/Spinner';
import JoaContext from '../context/joa/joaContext';

const Detail = ({ match }) => {

    const joaContext = useContext(JoaContext);
    const { selectedPlace, loading, getPlace, places } = joaContext;

    useEffect(() => {
        getPlace(match.params.id);
        // eslint-diable-next-line
    }, [])
   
    if (!places || !selectedPlace)  return <Spinner />;
    else {
        console.log("place info ", selectedPlace);
        return (
            <div className='detail-container' >
                    <img className='detail-img'src={selectedPlace.picture} alt="place-main-img"  />
                    <div className="details-info" >
                        {/* <p href={place.schedule.en || place.schedule.fr || ''}></p> */}
                        <p> <i className="fas fa-phone-square-alt"/> {selectedPlace.phone}  </p>
                        <p> <i className="fas fa-map-marked-alt"/> {selectedPlace.address} </p>
                        <p> <i className="fas fa-home"/> {selectedPlace.website} </p>
                        <p> <i className="fas fa-share-alt"/> Share </p>
                    </div>
            </div>
        );
    }
}

export default Detail

