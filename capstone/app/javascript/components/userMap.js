import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'


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
   mymap.locate({setView: true, maxZoom: 16});
   function onLocationFound(e) {
         var radius = e.accuracy;

         L.marker(e.latlng).addTo(mymap)
             .bindPopup(`You are within ${radius} meters of this spot`).openPopup();

         L.circle(e.latlng, radius).addTo(mymap);
     }
     function onLocationError(e) {
         alert(e.message);
     }

     mymap.on('locationerror', onLocationError);

     mymap.on('locationfound', onLocationFound);
   // console.log(this.state.closeUsers);
   const {closeUsers} = this.props
     if(closeUsers.length != 0 || null) {
         closeUsers.map((user, index) => {
           function onMouseOver(e) {
             marker.openPopup()
           }
           function onMouseOut(e) {
             marker.closePopup()
           }
           function openModal(){

             dialog.addTo(mymap).setLocation([100,100]).open().hideResize()
           }
           function closeModal(){
             dialog.close()
           }
           var latt = user.lat;
           var long = user.lng;
          var marker = L.marker([latt, long]).addTo(mymap);
          var dialog = L.control.dialog().setContent(
                      `<img className = 'modalPic' height='190' width='190' src=${user.picture_url}/>
                      <p className = 'username'><b> ${user.username} </b></p><p className='showstatus'>${user.userStatus}</p><p><Button href='/userprofile/${user.id}'>Request a Meet</Button></p>`
                    )
              marker.bindPopup(
                `<img className = 'popupPic' height='100' width='100' src=${user.picture_url}/>
                <p className = 'username'><b> ${user.username} </b></p><p className='showstatus'>${user.userStatus}</p><p><Button href='/userprofile/${user.id}'>Request a Meet</Button></p>`
           )
              marker.on('mouseover', onMouseOver)
              marker.on('mouseout', onMouseOut)
              marker.on('click', openModal)

              mymap.on('click', closeModal)

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
