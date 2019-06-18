import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from 'react'

export class MapContainer extends Component {
  onMarkerClick=()=>{
    console.log("ran marker click");
  }
  render() {
    let{ myLocation }=this.props
    return (
      <Map
        google={this.props.google}
        zoom={20}
        initialCenter={{
        lat: myLocation.lat,
        lng: myLocation.lng
      }}
      >
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDwjy2BCmYxnLmCtH1QZtH4L88YErTeK6M")
})(MapContainer)
