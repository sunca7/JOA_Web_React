import React, { useEffect, useContext } from 'react'
import './Components.scss';
import { Slide } from 'react-slideshow-image';
import Spinner from './layout/Spinner';
import JoaContext from '../context/joa/joaContext';
import DetailMap from './DetailMap'

const Detail = ({ match }) => {
    const joaContext = useContext(JoaContext);
    const { selectedPlace, loading, getPlace } = joaContext;
    let photos = [];

    const proprietes = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrow: true
    }

    useEffect(() => {
        getPlace(match.params.id);
        // eslint-diable-next-line
    }, [])
   
    if (loading)  return <Spinner />;
    return (
        <div className='detail-container' >
            {selectedPlace.newPhotos && 
                <div className="slide-container">
                    <Slide {...proprietes}>
                        {selectedPlace.newPhotos.map(photo => (
                            <div className="each-slide">
                                <div>
                                    <img src={photo} alt="img"/>
                                </div>
                            </div>
                            ))}
                    </Slide>
                </div>}
            {!selectedPlace.newPhotos && <img className='detail-img'src={selectedPlace.picture} alt="place-main-img"  />}
            <div className="details-info" >
                {/* <p href={place.schedule.en || place.schedule.fr || ''}></p> */}
                {selectedPlace.phone && <p> <i className="fas fa-phone-square-alt"/> {selectedPlace.phone}  </p>}
                {selectedPlace.address && <p> <i className="fas fa-map-marked-alt"/> {selectedPlace.address} </p>}
                {selectedPlace.website && <a target="_blank" rel="noopener noreferrer" href={selectedPlace.website}> <p> <i className="fas fa-home"/> <text>{selectedPlace.website}</text></p></a>}
                <p> <i className="fas fa-share-alt"/> Share </p>
            </div>
                <DetailMap />
        </div>
    );
}

export default Detail

