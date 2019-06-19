import React from "react"
import PropTypes from "prop-types"
import MapContainer from "./googlemap.js"
import FeedTopNav from "./feedTopNav.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCog } from '@fortawesome/free-solid-svg-icons'
import{Card, CardImg, Button, CardTitle, CardBody, CardSubtitle, CardText} from 'reactstrap'

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state={
      feed:[{
            post:"this is just fake text. how long should a post be 250 characters?",
            userName: "John Something",
            currentStatus: "Available",
            profilePic: "https://www.evolutionsociety.org/userdata/news_picupload/pic_sid189-0-norm.jpg",
            lat: 32.708910,
            lng:-117.159447
            },
            {
            post:"this is just fake text. how long should a post be 250 characters?",
            userName: "John Something",
            currentStatus: "Available",
            profilePic: "https://www.evolutionsociety.org/userdata/news_picupload/pic_sid189-0-norm.jpg",
            lat: 32.709331,
            lng:-117.159827
            },
            {
                  post:"this is just fake text. how long should a post be 250 characters?",
                  userName: "John Something",
                  currentStatus: "Available",
                  profilePic: "https://www.evolutionsociety.org/userdata/news_picupload/pic_sid189-0-norm.jpg",
                  lat: 32.708910,
                  lng:-117.159447
                  }
      ],
      myLocation:{
        lat: 32.709144,
        lng:-117.159194
      }
    }
  }
  componentDIdMount=()=>{

  }
  menuShow=()=>{
    console.log("menu show");
  }
  render () {
    let{ myLocation, feed }=this.state
    let{ renderProfiles }=this
    return (
        <div id="map-holder">
          <div id="fake-feed">
          <FeedTopNav />
          {feed.map((value, index)=>{
            return (
              <div className="feedcard">
              <img className="feed-avatar" src={feed[index].profilePic} alt="Card image cap" />
                <div id="feed-status">
                  <FontAwesomeIcon icon={faCoffee} color="green" pull="right"/>
                  <p>Available</p>
                </div>
                <div className="feed-name">
                  {feed[index].userName}
                </div>
                <div className="feed-post-text">
                  {feed[index].post}
                </div>
                <div className="feed-btn">
                  <button className="meet-btn">Meet</button>
                </div>
              </div>
            )
          })}
          </div>
          <MapContainer
            myLocation={myLocation}
            feed={feed}
          />
        </div>
       );
     }
   }
export default Home
