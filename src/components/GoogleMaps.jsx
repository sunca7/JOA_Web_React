import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class GoogleMaps extends Component {
  
    displayMarkers = () => {
      return this.props.mapItems.map((item, index) => {
        return <Marker key={index} id={index} position={{
         lat: item.latitude,
         lng: item.longitude
       }}
       onClick={() => console.log("You clicked me!")} />
      })
    }
  
    render() {

    const mapStyle = {
        height: '450px',
        maxWidth: '992px',
        width: '100%'
    }

      return (
          <Map
            google={this.props.google}
            zoom={12}
            style={mapStyle}
            initialCenter={{ lat: 48.8566, lng: 2.3522}}
          >
            {this.displayMarkers()}
          </Map>
      );
    }
  }
  
export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })(GoogleMaps);
