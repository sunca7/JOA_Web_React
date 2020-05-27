import React, { useContext } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import JoaContext from '../context/joa/joaContext';

const DetailMap = (props) => {
    const joaContext = useContext(JoaContext);
    const { selectedPlace } = joaContext;

    const mapStyle = {
        height: '40vh',
        width: '50vw'
    }

    return (
        <Map
          google={props.google}
          zoom={15}
          style={mapStyle}
          initialCenter={{ lat: selectedPlace.latitude, lng: selectedPlace.longitude}}
        >
          <Marker 
                    title={selectedPlace.name.en || ''}
                    name={selectedPlace.name.en || ''}
                    position={{
                        lat: selectedPlace.latitude,
                        lng: selectedPlace.longitude
                    }}
                />
        </Map>
    );
  }
  
export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })(DetailMap);