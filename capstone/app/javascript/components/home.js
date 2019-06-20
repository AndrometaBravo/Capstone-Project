import React from "react"
import PropTypes from "prop-types"
//sebastians map container
// import MapContainer from "./googlemap.js"
import FeedTopNav from "./feedTopNav.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCog } from '@fortawesome/free-solid-svg-icons'
import{Card, CardImg, Button, CardTitle, CardBody, CardSubtitle, CardText} from 'reactstrap'
import MapContainer from './mapcontainer'
import CloudFeed from  './feed'
import UserModal from './userModal'


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
    let{ posts }=this.props
    return (
        <div id="map-holder">
          <div id="fake-feed">
          <FeedTopNav />
          <CloudFeed posts={posts}/>
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
