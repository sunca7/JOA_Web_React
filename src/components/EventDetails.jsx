import React, { Fragment, useEffect, useContext } from 'react'
import Spinner from './layout/Spinner';
import JoaContext from '../context/joa/joaContext';
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

const EventDetail = ({ match }) => {
    const joaContext = useContext(JoaContext);
    const { event, loading, getEventItem } = joaContext;

    const shareUrl = 'joa-korea.com/event/' + event.id;

    useEffect(() => {
        getEventItem(match.params.id);
        // eslint-diable-next-line
    }, [])

    if (loading) return <Spinner />;
    return (
        <div className='detail-container'>
            <img className='detail-img' src={event.picture} alt="place-main-img"/>
            <div className="details-info" >
            {event.name && <p id='name'>{event.name.en || event.name.fr}</p>}
            {event.description && <p id='description'>{event.description.fr || event.description.en}</p>}
            {event.website && <a target="_blank" rel="noopener noreferrer" href={event.website}> <p> <i className="fas fa-home"/> <span>Cliquez ici pour découvrir en ligne</span></p></a>}
            <p> <i className="fas fa-share-alt share"/> 
                <EmailShareButton url={shareUrl}><EmailIcon round={true} /></EmailShareButton>
                <FacebookShareButton url={shareUrl} ><FacebookIcon id='icon' round={true} /></FacebookShareButton>
                <RedditShareButton url={shareUrl} ><RedditIcon id='icon' round={true} /></RedditShareButton>
                <TwitterShareButton url={shareUrl}><TwitterIcon id='icon' round={true} /></TwitterShareButton>
                <WhatsappShareButton url={shareUrl}> <WhatsappIcon id='icon' round={true} /></WhatsappShareButton></p>
            </div>
        </div>
    );
}

export default EventDetail