import React, {Component} from 'react';


export default class UserMap extends Component {

componentDidUpdate(prevProps) {
  if(prevProps.closeUsers===this.props.closeUsers){
    return true
  }


  var mymap = L.map('mapid').setView([32.7167, -117.1661], 13);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
       attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
       maxZoom: 18,
       id: 'mapbox.streets',
       accessToken: 'pk.eyJ1Ijoic3doaXRlMjEiLCJhIjoiY2p4YzJ0MHFrMW8zZzN5cnYxZXowaGI4cSJ9.Wv8XBXSDANxtBHWNsoFGOg'
   }).addTo(mymap);

   // console.log(this.state.closeUsers);
   const {closeUsers} = this.props
     if(closeUsers.length != 0) {
         closeUsers.map((user, index) => {
           function onMouseOver(e) {
             marker.openPopup()
           }
           function onMouseOut(e) {
             marker.closePopup()
           }
           function openModal(){
             dialog.open()
           }
           var latt = user.lat;
           var long = user.lng;
          var marker = L.marker([latt, long]).addTo(mymap);
              marker.bindPopup(
              "<img className = 'popupPic' height='100' width='100' src=" + user.picture_url + "/>" +
              "<p><b>" + user.username + "</b></p>" + "<p>" + user.userStatus + "</p>"
           )

           var dialog = L.control.dialog()
           .setContent("<p>Hello! Welcome to your nice new dialog box!</p>")
           .addTo(mymap);

              marker.on('mouseover', onMouseOver)
              marker.on('mouseout', onMouseOut)
              marker.on('click', openModal)
         })
      }else{
           return null
      }
   }


  render(){

     return(
            <div id = "mapid"></div>
      )
 }
 }
