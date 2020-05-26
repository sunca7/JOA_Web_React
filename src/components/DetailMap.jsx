import React, { useContext } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import JoaContext from '../context/joa/joaContext';

const DetailMap = (props) => {
    const joaContext = useContext(JoaContext);
    const { selectedPlace } = joaContext;

    // const displayMarkers = () => {
    //     return props.mapItems.map((item, index) => {
    //     return <Marker 
    //                 key={index} 
    //                 id={item.id}
    //                 title={item.name.en || ''}
    //                 name={item.name.en || ''}
    //                 position={{
    //                 lat: item.latitude,
    //                 lng: item.longitude
    //                 }}
    //             />
    //     })
    // }

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