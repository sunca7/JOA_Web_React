import React, { useContext } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import JoaContext from '../context/joa/joaContext';

const DetailMap = (props) => {
    const joaContext = useContext(JoaContext);
    const { selectedPlace } = joaContext;

    const mapStyle = {
      width : '50vw',
      height: '40vh',
    }

    return (
      <div className='detail-map-container'>
        <Map id="detail-map"
          google={props.google}
          zoom={15}
          // style={mapStyle}
          initialCenter={{ lat: selectedPlace.latitude, lng: selectedPlace.longitude}}>
          <Marker 
            title={selectedPlace.name.en || ''}
            name={selectedPlace.name.en || ''}
            position={{
                lat: selectedPlace.latitude,
                lng: selectedPlace.longitude}}/>
        </Map>
      </div>
    );
  }
  
export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })(DetailMap);