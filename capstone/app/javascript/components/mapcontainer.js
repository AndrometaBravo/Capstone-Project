import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import MapIcon from './mapIcon';
import UserModal from './userModal'

export class MapContainer extends Component {
  constructor(props) {
  super(props)
this.state = {
      selectedPlace: {},
      name: "Petco Park San Diego",
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      modal:false,
      profile: {
        picture_url: "",
        username: "",
        bio: "",
        lat: 23,
        lng: 34,
        firstname: "",
      }
        }
      }

  toggle = () => {
    let {modal} = this.state
    this.setState(prevState => ({
          modal: !prevState.modal
        }));
    }


  onMarkerClick(props, marker, e) {
        console.log("Marker Clicked")
      }
  onMapClicked(props, marker, e) {
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
      }
   };
  render() {
    let {username, userStatus, closeUsers} = this.props
    console.log(closeUsers.length + " users");
    let userGeoArr = []
    closeUsers.map((user, index)=>{
      userGeoArr.push({lat: user.lat, lng: user.lng})
    })
    console.log(userGeoArr);
    const style = {
      width: '100%',
      height: '100%'
    }

    return (
      <div>
      <div>
      <Map
          google={this.props.google}
          onDragend={this.centerMoved}
          google={this.props.google}
          zoom={14}
          style={style}
          initialCenter={{
                lat: 32.709582,
                lng: -117.157973
                }}
          onClick={this.onMapClicked}>

          {userGeoArr.map((value, index)=>{
            return(
              <Marker
                  position={value} />

            )
          })}


                <InfoWindow
                  marker={this.state.activeMarker}
                  visible={this.state.showingInfoWindow}
                  >
                    <div className = "map">
                      <MapIcon profile={this.state.profile}/>
                    </div>
                </InfoWindow>
      </Map>

      <UserModal
          isOpen={this.state.modal}
          toggle = {this.toggle}
          profile = {this.state.profile}
      />
      </div>
      </div>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDwjy2BCmYxnLmCtH1QZtH4L88YErTeK6M")
})(MapContainer)
