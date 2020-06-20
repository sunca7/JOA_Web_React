import React, { useEffect, useContext } from 'react'
import './Components.scss';
import { Slide } from 'react-slideshow-image';
import Spinner from './layout/Spinner';
import JoaContext from '../context/joa/joaContext';
import DetailMap from './DetailMap'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import {
    EmailShareButton,
    FacebookShareButton,
    RedditShareButton,
    TwitterShareButton,
    WhatsappShareButton,
  } from "react-share";

const useStyles = makeStyles({
    root: {
        width: '90vw',
        marginTop: '2vh',
        maxWidth: 800,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    media: {
        height: '40vh',
    },
    map : {
        height: '30vh'
    }
  });

  let theme = createMuiTheme();
    theme = responsiveFontSizes(theme);

const Detail = ({ match }) => {
    const joaContext = useContext(JoaContext);
    const { selectedPlace, loading, getPlace } = joaContext;

    const proprietes = {
        duration: 3000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrow: "true"
    }
    const classes = useStyles();
    
    let shareUrl = null;
    if (selectedPlace.name) {
        let encoded = null;
        encoded = encodeURI(selectedPlace.name.en);
        shareUrl = 'joa-korea.com/details/' + encoded; }

    useEffect(() => {
        getPlace(match.params.name);
        // eslint-diable-next-line
    }, [])
   
    if (loading)  return <Spinner />;
    return (
    <div className='detail-container'>
        <Card className={classes.root}>
            <CardActionArea>
                {selectedPlace.newPhotos && <CardContent className={classes.media}>
                    {selectedPlace.newPhotos && 
                                <div className="slide-container">
                                    <Slide {...proprietes}>
                                        {selectedPlace.newPhotos.map(photo => (
                                            <div className="each-slide"
                                                key = {selectedPlace.id}>
                                                <div><img src={photo} alt="img"/></div>
                                            </div>
                                            ))}
                                    </Slide>
                                </div>}
                </CardContent>}
                {!selectedPlace.newPhotos && <CardMedia
                    className={classes.media}
                    image={selectedPlace.picture}
                    title="place-main-img"
                />} 
                <CardContent>
                    <ThemeProvider theme={theme}>
                            {selectedPlace.name && <Typography gutterBottom variant="h5" component="h2" align ="center">
                                {selectedPlace.name.en || selectedPlace.name.fr || selectedPlace.name.kr}</Typography> }
                        <Typography variant="h6" component="p" >
                                {selectedPlace.phone && <p> <i className="fas fa-phone-square-alt"/> {selectedPlace.phone}  </p>}
                                {selectedPlace.address && <p> <i className="fas fa-map-marked-alt"/> {selectedPlace.address} </p>}
                                {selectedPlace.website && <a target="_blank" rel="noopener noreferrer" href={selectedPlace.website}> <p> <i className="fas fa-home"/> <span>{selectedPlace.website}</span></p></a>}
                                <p> <i className="fas fa-share-alt share"/> 
                                <EmailShareButton url={shareUrl}><i className="fa fa-envelope-o" /></EmailShareButton>
                                <FacebookShareButton url={shareUrl}> <i className="fa fa-facebook-official" color="blue" /></FacebookShareButton>
                                <RedditShareButton url={shareUrl} ><i className="fa fa-reddit" /></RedditShareButton>
                                <TwitterShareButton url={shareUrl}><i className="fa fa-twitter-square" /></TwitterShareButton>
                                <WhatsappShareButton url={shareUrl}> <i className="fa fa-whatsapp" /></WhatsappShareButton></p>
                        </Typography>
                    </ThemeProvider>
                </CardContent>
                <CardContent className={classes.map}>
                    <DetailMap />
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
    );
}

export default Detail

