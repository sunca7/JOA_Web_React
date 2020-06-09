import React, { useState, Fragment, useEffect, Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { Link } from 'react-router-dom';

class GoogleMap extends Component {
  componentDidMount() {
    this.renderMap();
  }
  
renderMap = () => {

    window['initMap'] = () => {
      this.loadMap();      
    }

    if(!window.document.getElementById('google-map-script')) {
      var s = window.document.createElement("script");
      s.id = "google-map-script";
      s.type = "text/javascript";
      s.src = "https://maps.googleapis.com/maps/api/js?key=" + process.env.REACT_APP_GOOGLE_MAPS_API_KEY + "&amp;callback=initMap";
       
      window.document.body.appendChild(s);
    } else {
      this.loadMap();
    }
}

loadMap = () => {

    var map = new window['google'].maps.Map(this.refs.map, {
        center: {lat: 48.8566, lng: 2.3522},
        zoom: 12
    });
     
    var marker = new window['google'].maps.Marker({
        position: {lat: 48.8566, lng: 2.3522},
        map: map,
        title: 'Hello',
    });
  
    var contentString = '<div id="content">'+
    '<div class="infoBtn">'+
    '<a href="http://localhost:3000/details/BliEYJT7BnkvdnogsF8J">'+
    'info</a>' +
    '</div>'+
    '<div class="bodyContent">'+
    '<p>Place Name</p>'+
    '</div>'+
    '</div>';
 
    var infowindow = new window['google'].maps.InfoWindow({
        content: contentString
    });
 
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
    
 }    

render() {
  return (
    <div className="map">
        <div className="card-body">
            <div ref="map" style={{'width':'80%', 'height':'400px', 'marginLeft':'auto', 'marginRight':'auto' }}></div>
        </div>
    </div>
  );
}
}

export default GoogleMap;

// const GoogleMap = (props) => {

//   const [selectedCenter, setSelectedCenter] = useState(null);
//   const [activeMarker, setActiveMarker] = useState({});
//   const [showingInfoWindow, setShowingInfoWindow] = useState(false);

//   var bounds = new props.google.maps.LatLngBounds();
//   const button = document.querySelector('button');

//   const onMarkerClick = (props, marker) => {
//     setActiveMarker(marker);
//     setSelectedCenter(props);
//     setShowingInfoWindow(true);
//     // bounds.extend(props.position);
//     // props.google.maps.fitBound(bounds);
//     console.log("position ", props.position);
//   }

//   const onInfoWindowClose = () => {
//     setActiveMarker(null);
//     setShowingInfoWindow(false);
//   }

//   const onMapClicked = () => {
//     if (showingInfoWindow) {
//       setActiveMarker(null);
//       setShowingInfoWindow(false);
//     }
//   }

//   const onInfoWindowClick = () => {
//     if (showingInfoWindow) {
//     console.log("info window click")}
//     window.location.href = "http://localhost:3000/details/BliEYJT7BnkvdnogsF8J"; 
//   }

//   if (selectedCenter) { 
//     button.addEventListener('click', onInfoWindowClick);
//   }
      
//   const displayMarkers = () => {
//     return props.mapItems.map((item, index) => {
//       return <Marker 
//                 key={index} 
//                 id={item.id}
//                 title={item.name.en || ''}
//                 name={item.name.en || ''}
//                 position={{
//                   lat: item.latitude,
//                   lng: item.longitude
//                 }}
//                 onClick={onMarkerClick} />
//     })
//   }

//   const displayInfo = () => {
//       if (selectedCenter) { 
//         console.log("selectedCenter ", selectedCenter);
//         return (
//           <InfoWindow className='infoWindow'
//             marker={activeMarker}
//             onClose={onInfoWindowClose}
//             visible={showingInfoWindow}
//         >             
//             <div>
//               <button name='test'>info</button>
//               <h4>{selectedCenter.title || ''}</h4>
//             </div>
//         </InfoWindow>
//         ); 
//       }}

//     return (
//       <div className='map-container'> 
//           <Map id='map'
//             google={props.google}
//             zoom={12}
//             initialCenter={{ lat: 48.8566, lng: 2.3522}}
//             onClick={onMapClicked}
//             // bounds={bounds}          
//             >
//             { displayMarkers() }
//             { displayInfo() }
//           </Map>
//         </div>
//     );
//   }
  
// export default GoogleApiWrapper({
//     apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
//   })(GoogleMap);
