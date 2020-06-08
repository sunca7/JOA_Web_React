import React, { useState, Fragment, useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { Link } from 'react-router-dom';

const GoogleMap = (props) => {

  const [selectedCenter, setSelectedCenter] = useState(null);
  const [activeMarker, setActiveMarker] = useState({});
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);

  var bounds = new props.google.maps.LatLngBounds();
  const button = document.querySelector('button');

  const onMarkerClick = (props, marker) => {
    setActiveMarker(marker);
    setSelectedCenter(props);
    setShowingInfoWindow(true);
    // bounds.extend(props.position);
    // props.google.maps.fitBound(bounds);
    console.log("position ", props.position);
  }

  const onInfoWindowClose = () => {
    setActiveMarker(null);
    setShowingInfoWindow(false);
  }

  const onMapClicked = () => {
    if (showingInfoWindow) {
      setActiveMarker(null);
      setShowingInfoWindow(false);
    }
  }

  const onInfoWindowClick = () => {
    if (showingInfoWindow) {
    console.log("info window click")}
    window.location.href = "http://localhost:3000/details/BliEYJT7BnkvdnogsF8J"; 
  }

  if (selectedCenter) { 
    button.addEventListener('click', onInfoWindowClick);
  }
      
  const displayMarkers = () => {
    return props.mapItems.map((item, index) => {
      return <Marker 
                key={index} 
                id={item.id}
                title={item.name.en || ''}
                name={item.name.en || ''}
                position={{
                  lat: item.latitude,
                  lng: item.longitude
                }}
                onClick={onMarkerClick} />
    })
  }

  const displayInfo = () => {
      if (selectedCenter) { 
        console.log("selectedCenter ", selectedCenter);
        return (
          <InfoWindow className='infoWindow'
            marker={activeMarker}
            onClose={onInfoWindowClose}
            visible={showingInfoWindow}
        >             
            <div>
              <button name='test'>info</button>
              <h4>{selectedCenter.title || ''}</h4>
            </div>
        </InfoWindow>
        ); 
      }}

    return (
      <div className='map-container'> 
          <Map id='map'
            google={props.google}
            zoom={12}
            initialCenter={{ lat: 48.8566, lng: 2.3522}}
            onClick={onMapClicked}
            // bounds={bounds}          
            >
            { displayMarkers() }
            { displayInfo() }
          </Map>
        </div>
    );
  }
  
export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })(GoogleMap);
