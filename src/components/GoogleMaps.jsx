import React, { Component , useState, useEffect} from 'react';
import { GoogleMap, Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const GoogleMaps = (props) => {

  const [selectedCenter, setSelectedCenter] = useState({});

  useEffect(() => {
                const listener = e => {
                  if (e.key === "Escape") {
                      setSelectedCenter(null);
                  }
                };
                window.addEventListener("keydown", listener);
                return () => {
                  window.removeEventListener("keydown", listener);
                };
  },[]);

  const displayMarkers = () => {
    return props.mapItems.map((item, index) => {
      return <Marker 
                key={index} 
                id={index}
                title={item.name.en || ''}
                name={item.name.en || ''}
                position={{
                lat: item.latitude,
                lng: item.longitude
              }}
                onClick={() => {
                  setSelectedCenter(item);
                }} 
              >
              </Marker> 
    })
  }

  const displayInfo = () => {
      if (selectedCenter) {
        console.log("selectedCenter ", selectedCenter);
        return (
          <InfoWindow
            onCloseClick={() => {
                setSelectedCenter(null);
            }}
            position={{
                lat: selectedCenter.latitude,
                lng: selectedCenter.longitude
            }}
          >
            <div style={{background :'white'}}>
                {/* <h3>{selectedCenter.name.en || ''}</h3> */}
                <p>Hours of operation:</p>
              </div>
        </InfoWindow> ); }}
    
  
  
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
        >
          {displayMarkers()}
          {/* {displayInfo()} */}
        </Map>
    );
  }
  
export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })(GoogleMaps);
