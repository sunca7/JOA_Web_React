import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { Link } from 'react-router-dom';

const GoogleMap = (props) => {

  const [selectedCenter, setSelectedCenter] = useState(null);
  const [activeMarker, setActiveMarker] = useState({});
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);

  var bounds = new props.google.maps.LatLngBounds();

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

  const displayMarkers = () => {
    return props.mapItems.map((item, index) => {
      return <Marker 
                key={index} 
                id={index}
                title={item.name.en || ''}
                name={''}
                position={{
                lat: item.latitude,
                lng: item.longitude
                }}
                onClick={onMarkerClick} 
              >
              </Marker> 
    })
  }

  const displayInfo = () => {
      if (selectedCenter) { 
        console.log("selectedCenter ", selectedCenter);
        return (
          <InfoWindow
          marker={activeMarker}
          onClose={onInfoWindowClose}
          visible={showingInfoWindow}
        > 
            <div>
              <h4>{selectedCenter.title || ''}</h4>
            </div>
        </InfoWindow>
        ); 
      }}
  
  const mapStyle = {
      height: '450px',
      maxWidth: '992px',
      width: '100%'
  }

    return (
        <Map
          google={props.google}
          zoom={12}
          style={mapStyle}
          initialCenter={{ lat: 48.8566, lng: 2.3522}}
          onClick={onMapClicked}
          // bounds={bounds}          
        >
          {displayMarkers()}
          {displayInfo()}
        </Map>
    );
  }
  
export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })(GoogleMap);
