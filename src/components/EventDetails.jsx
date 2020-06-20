import React, { Fragment, useEffect, useContext } from 'react'
import Spinner from './layout/Spinner';
import JoaContext from '../context/joa/joaContext';
import './Components.scss';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
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
    // map : {
    //     height: '30vh'
    // }
  });

  let theme = createMuiTheme();
    theme = responsiveFontSizes(theme);

const EventDetail = ({ match }) => {
    const joaContext = useContext(JoaContext);
    const { event, loading, getEventItem } = joaContext;
    const classes = useStyles();
    const shareUrl = 'joa-korea.com/event/' + event.id;

    useEffect(() => {
        getEventItem(match.params.id);
        // eslint-diable-next-line
    }, [])

    if (loading) return <Spinner />;
    return (
        <div className='detail-container event-detail'>
            <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={event.picture}
                    title="place-main-img"
                />
                <CardContent>
                    <ThemeProvider theme={theme}>
                    <Typography>
                            {event.name && <Typography gutterBottom variant="h5" component="h2" align ="center">
                                {event.name.en || event.name.fr || event.name.kr}</Typography> }
                            {event.description && <Typography variant="body1" component='p' align ="center"> {event.description.fr || event.description.en} </Typography> }
                            {event.website && <Typography variant="h6" component="h3" ><a target="_blank" rel="noopener noreferrer" href={event.website}> <p> <i className="fas fa-home"/> <span>Cliquez ici pour découvrir en ligne</span></p></a></Typography> }
                                <p> <i className="fas fa-share-alt share"/> 
                                <EmailShareButton url={shareUrl}><i className="fa fa-envelope-o" /></EmailShareButton>
                                <FacebookShareButton url={shareUrl}> <i className="fa fa-facebook-official" color="blue" /></FacebookShareButton>
                                <RedditShareButton url={shareUrl} ><i className="fa fa-reddit" /></RedditShareButton>
                                <TwitterShareButton url={shareUrl}><i className="fa fa-twitter-square" /></TwitterShareButton>
                                <WhatsappShareButton url={shareUrl}> <i className="fa fa-whatsapp" /></WhatsappShareButton></p>
                        </Typography>
                    </ThemeProvider>
                </CardContent>
            </CardActionArea>
        </Card>
        </div>
    );
}

export default EventDetail