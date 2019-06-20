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
import NewPostBox from './newPostBox'


class Home extends React.Component {
  constructor(props){
    super(props)
    this.state={

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

        <div className="grid-container">
          <div className="Feed">
          <FeedTopNav />
            <div className="Feed-Posts">
              <CloudFeed posts={posts}/>
            </div>

          </div>
          <div className="Map-Container">
          <MapContainer
            myLocation={myLocation}
            feed={feed}
          />
          <div className="Comment-Box">
            <p>Compose New Post</p>
            <Button>Submit</Button>
          </div>
          <div className="Filter-Area">
          <p>Filter</p>
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Cras
              <span className="badge badge-primary badge-pill">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Dapibus ac facilisis in
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
