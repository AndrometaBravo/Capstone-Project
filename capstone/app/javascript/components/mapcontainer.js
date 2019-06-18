import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  constructor(props) {
  super(props)
this.state = {
      selectedPlace: {
      name: "Petco Park San Diego",
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
        }
      }

  }
  onMarkerClick(props, marker, e) {
        console.log("Map Clicked")
      }
  onMouseoverMarker=(props, marker, e) => {
        if (event.type == 'mouseover') {
            this.setState({
                 selectedPlace: props,
                 activeMarker: marker,
                 showingInfoWindow: true
       })
   }else if (event.type =='mouseout') {
     this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: false
        })

   };
 // } else {
 //    this.setState({
 //        selectedPlace: {},
 //        activeMarker: {},
 //        showingInfoWindow: false
 //      })

}

  render() {

    return (
      <Map
          google={this.props.google}
          onDragend={this.centerMoved}
          google={this.props.google}
          zoom={14}
          initialCenter={{
                lat: 32.709582,
                lng: -117.157973
                }}
          onClick={this.onMapClicked}>

        <Marker onClick={this.onMarkerClick}
                onMouseover={this.onMouseoverMarker}
                onMouseout={this.onMouseoverMarker}
                name={'Dummy User'} />


                <InfoWindow
                  marker={this.state.activeMarker}
                  visible={this.state.showingInfoWindow}>
                    <div>
                      <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDwjy2BCmYxnLmCtH1QZtH4L88YErTeK6M")
})(MapContainer)
