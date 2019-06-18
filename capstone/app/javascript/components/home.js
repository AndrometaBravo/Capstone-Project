import React from "react"
import PropTypes from "prop-types"
import MapContainer from "./googlemap.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import{Card, CardImg, Button, CardTitle, CardBody, CardSubtitle, CardText} from 'reactstrap'

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state={
      feed:[{
        post:"this is just fake text. how long should a post be 250 characters?",
        userName: "John Something",
        currentStatus: "Available",
        profilePic: "https://www.evolutionsociety.org/userdata/news_picupload/pic_sid189-0-norm.jpg"
      }],
      myLocation:{
        lat: 32.728750,
        lng: -117.150858
      }
    }
  }

  render () {
    let{ myLocation, feed }=this.state
    return (
        <div id="map-holder">
        <div id="fake-feed">
        <div className="feedcard">
        <img className="feed-avatar" src={feed[0].profilePic} alt="Card image cap" />
          <CardTitle>{feed[0].userName}</CardTitle>
          <div className="feed-icon">
          <p>Available</p>
          <FontAwesomeIcon icon={faCoffee} color="green"/>
          </div>
          <div id="feed-post-text">
          Some quick example text to build on the card title and make up the bulk of the cards content.
          </div>
          <div className="feed-btn">
          <Button>Meet</Button>
          </div>
      </div>
        </div>
        <MapContainer myLocation={myLocation}/>
        </div>
       );
     }
   }
export default Home
