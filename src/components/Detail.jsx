import React, { useEffect, useContext } from 'react'
import './Components.scss';
import { Slide } from 'react-slideshow-image';
import Spinner from './layout/Spinner';
import JoaContext from '../context/joa/joaContext';
import DetailMap from './DetailMap'
import {
    EmailShareButton,
    FacebookShareButton,
    RedditShareButton,
    TwitterShareButton,
    WhatsappShareButton,
  } from "react-share";

  import {
    EmailIcon,
    FacebookIcon,
    RedditIcon,
    TwitterIcon,
    WhatsappIcon,
  } from "react-share";

const Detail = ({ match }) => {
    const joaContext = useContext(JoaContext);
    const { selectedPlace, loading, getPlace } = joaContext;
    let photos = [];

    const proprietes = {
        duration: 3000,
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
                {/* {selectedPlace.schedule && <p id='schedule'> </p> } */}
                {selectedPlace.name && <p id='name'>{selectedPlace.name.en || selectedPlace.name.fr || selectedPlace.name.kr}</p>}
                {selectedPlace.phone && <p> <i className="fas fa-phone-square-alt"/> {selectedPlace.phone}  </p>}
                {selectedPlace.address && <p> <i className="fas fa-map-marked-alt"/> {selectedPlace.address} </p>}
                {selectedPlace.website && <a target="_blank" rel="noopener noreferrer" href={selectedPlace.website}> <p> <i className="fas fa-home"/> <span>{selectedPlace.website}</span></p></a>}
                <p> <i className="fas fa-share-alt share"/> 
                <EmailShareButton url="www.google.com"><EmailIcon round={true} /></EmailShareButton>
                <FacebookShareButton url="www.google.com" ><FacebookIcon id='icon' round={true} /></FacebookShareButton>
                <RedditShareButton url="www.google.com" ><RedditIcon id='icon' round={true} /></RedditShareButton>
                <TwitterShareButton url="www.google.com"><TwitterIcon id='icon' round={true} /></TwitterShareButton>
                <WhatsappShareButton url="www.google.com"> <WhatsappIcon id='icon' round={true} /></WhatsappShareButton></p>
            </div>
                <DetailMap />
        </div>
    );
}

export default Detail

