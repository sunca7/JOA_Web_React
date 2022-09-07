import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import marker from '../assets/marker1.png'

const GoogleMap = (props) => {

  const [selectedCenter, setSelectedCenter] = useState(null);
  const [activeMarker, setActiveMarker] = useState({});
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);

  const onMarkerClick = (props, marker) => {
    setActiveMarker(marker);
    setSelectedCenter(props);
    setShowingInfoWindow(true);
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

  let shareUrl = null;

  if (selectedCenter) {
    shareUrl = 'details/' + selectedCenter.id;
  }

  const displayMarkers = () => {
    return props.mapItems.map((item, index) => {
      return <Marker 
                key={index} 
                id={item.id}
                icon={{
                  url: marker,
                  scaledSize:  new props.google.maps.Size(35,35
                    )
                }}
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
        return (
          <InfoWindow className='infoWindow'
            marker={activeMarker}
            onClose={onInfoWindowClose}
            visible={showingInfoWindow}
        >             
            <div>
            <h4 id='infowindow'>{selectedCenter.title || ''}</h4>
              <div class="infoBtn">
                <a href={shareUrl}>info</a>
              </div>
            </div>
        </InfoWindow>
        ); 
      }}

  const mapStyle = {
    maxHeight: '592px',
    maxHidth: '992px',
    width : '90vw',
    height: '60vh',
    minHeight: '384px',
    marginLeft : 'auto',
    marginRight : 'auto'
  }

    return (
      <div className='map-container'> 
          <Map id='map'
            google={props.google}
            zoom={12.2}
            style={mapStyle}
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
