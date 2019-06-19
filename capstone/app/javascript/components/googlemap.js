import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from 'react'

export class MapContainer extends Component {
  onMarkerClick=()=>{
    console.log("ran marker click");
  }
  render() {
    let{ myLocation, feed }=this.props
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
                name={'My Location'}
                title={'hello?'}
        />
      { feed.map((value,index)=>{
          return(
            <Marker
            position={{lat: feed[index].lat, lng: feed[index].lng}}
            />
          )
        })
      }
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDwjy2BCmYxnLmCtH1QZtH4L88YErTeK6M")
})(MapContainer)
