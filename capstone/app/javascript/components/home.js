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
            debugger
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
              <CloudFeed posts={posts} statusFilter={statusFilter} closeUsers={closeUsers}/>
            </div>

          </div>
          <div className="Map-Container">
          <MapContainer
            // myLocation={myLocation}
            closeUsers={closeUsers}
            feed={feed}
          />
          {current_user != null &&
            <div className="Comment-Box">
             <CloudPost current_user={current_user}/>
            </div>
          }
          <div className="Filter-Area">
          <p>Filter</p>
          { myLocation.length != 0 &&
            <p>Lat: {myLocation.location.lat}
            Lng: {myLocation.location.lng}</p>
          }
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
