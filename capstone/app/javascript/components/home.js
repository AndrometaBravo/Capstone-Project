import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom'
//sebastians map container
// import MapContainer from "./googlemap.js"
import FeedTopNav from "./feedTopNav.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCog } from '@fortawesome/free-solid-svg-icons'
import{Card, CardImg, Button, CardTitle, CardBody, CardSubtitle, CardText} from 'reactstrap'
import MapContainer from './mapcontainer'
import CloudFeed from  './feed'
import CloudPost from './post'
import NewPostBox from './newPostBox'
import{ geolocated } from 'react-geolocated'
import UserModal from './userModal'
import{ getCloseUsers } from './API'


class Home extends React.Component {
  constructor(props){
    super(props)
    this.state={
      closeUsers:[],
      posts:[]
    }
  }
  componentWillMount(){
    getCloseUsers()
      .then(APIusers => {
        this.setState({
          closeUsers: APIusers
        })
      })
      this.setState({posts: this.props.posts})
  }
  componentDidUpdate(prevProps){
        if (this.props.posts.length != prevProps.posts.length) {
          getPosts()
            .then(APIposts => {
              this.setState({
                posts: APIposts
              })
            })
          this.setState({posts: this.props.posts})
     }
   }
   componentDidMount(){
     var mymap = L.map('mapid').setView([32.711108, -117.157946], 13);
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
              .bindPopup("You are within " + radius + " meters from this point").openPopup();

          L.circle(e.latlng, radius).addTo(mymap);
      }
      function onLocationError(e) {
          alert(e.message);
      }

      mymap.on('locationerror', onLocationError);

      mymap.on('locationfound', onLocationFound);

      var hey = "here is some user date"

      L.marker([32.711108, -117.157946]).addTo(mymap)
      .bindPopup(hey)
      .openPopup();

      L.marker([32.713851, -117.159897]).addTo(mymap)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();


   }
   refreshLocation=()=>{

   }
  render () {
    console.log(this.props.posts.length);
    let{ feed, currentLocation, closeUsers, posts }=this.state
    let{ renderProfiles }=this
    const{  myLocation, statusFilter, getCloseUsers, current_user }=this.props
    return (

        <div className="grid-container">
              <div className="Feed">
                <FeedTopNav current_user={current_user} />
                  <div className="Feed-Posts">
                    <CloudFeed posts={posts} statusFilter={statusFilter} closeUsers={closeUsers} getCloseUsers={getCloseUsers}/>
                  </div>
              </div>
              <div className="Map-Container">
              <div id="mapid">
              </div>
              {current_user != null &&
                <div className="Comment-Box">
                  <CloudPost current_user={current_user}/>
                </div>
              }
              <div className="Filter-Area">
                <p>Filter</p>
                { myLocation.length != 0 &&
                  <p>
                    Lat: {myLocation.location.lat}
                    Lng: {myLocation.location.lng}
                  </p>
                }
                <Button>refresh location</Button>
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Total Posts
                    <span className="badge badge-primary badge-pill">{posts.length}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span className="badge badge-primary badge-pill">2</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Morbi leo risus
                    <span className="badge badge-primary badge-pill">1</span>
                    </li>
                </ul>
                </div>

        </div>
        </div>

       );
     }
   }

export default Home
