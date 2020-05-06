import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class GoogleMaps extends Component {
    // constructor(props) {
    //   super(props);
  
    //   this.state = {
    //     stores: [{lat: 47.49855629475769, lng: -122.14184416996333},
    //             {latitude: 47.359423, longitude: -122.021071},
    //             {latitude: 47.2052192687988, longitude: -121.988426208496},
    //             {latitude: 47.6307081, longitude: -122.1434325},
    //             {latitude: 47.3084488, longitude: -122.2140121},
    //             {latitude: 47.5524695, longitude: -122.0425407}]
    //   }
    // }
  
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
