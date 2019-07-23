import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom'
//sebastians map container
import FeedTopNav from "./feedTopNav.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCog } from '@fortawesome/free-solid-svg-icons'
import{Card, CardImg, Button, CardTitle, CardBody, CardSubtitle, CardText} from 'reactstrap'
import CloudFeed from  './feed'
import CloudPost from './post'
import NewPostBox from './newPostBox'
import{ getCloseUsers } from './API'

import{ getClosePosts } from './API'
import Avatar from './avatar'
import ChangeAvatar from './changeAvatar'
import UserMap from './userMap'



class Home extends React.Component {
  constructor(props){
    super(props)
    this.state={
      closeUsers:[],
      closePosts: [],
      posts:[],
      test: "it worked",
      visible: "modalHide"

    }
  }
  componentWillMount(){
    getCloseUsers()
      .then(APIusers => {
        this.setState({
          closeUsers: APIusers
        })
      })
      getClosePosts()
        .then(APIposts => {
            this.setState({
                closePosts: APIposts
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

  render () {
    console.log(this.props.posts.length);

    let{ feed, currentLocation, closeUsers, posts, closePosts}=this.state

    let{ renderProfiles }=this
    const{  myLocation, statusFilter, getCloseUsers, current_user, sign_in, sign_out, logged_in }=this.props
    return (
      <div>
      <header className="header">

        <nav className="navbar navbar-expand-lg">

          <div className="container">

              <a href="#intro" className="navbar-brand link-scroll">
                  <img src="img/cloudblue.png" alt="" className="img-fluid"/>Cloud Culture
              </a>

            <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right">
              <i className="fa fa-bars"></i>
            </button>

            <div id="navbarSupportedContent" className="collapse navbar-collapse">

              <ul className="navbar-nav ml-auto" id = "nav-items">
                <li className="nav-item">
                  <a href="#intro" className="nav-link link-scroll">Home</a>
                </li>
                <li className="nav-item">
                  <a href="#about" className="nav-link link-scroll">About </a>
                </li>
                <li className="nav-item">
                  <a href="#services" className="nav-link link-scroll">Team</a>
                </li>
                <li className="nav-item">
                  <a href="/map" className="nav-link link-scroll">Map</a>
                </li>
                <li className="nav-item">
                  <a href = {logged_in && sign_out || sign_in}
                      className="nav-link link-scroll">
                      {logged_in && "Sign Out"}{!logged_in && "Sign In"}
                  </a>
                </li>
              </ul>

            </div>

          </div>

        </nav>
      </header>

        <div className="grid-container">
              <div className="Feed">
                <FeedTopNav current_user={current_user} sign_in={sign_in} sign_out={sign_out} logged_in={logged_in}/>
                  <div className="Feed-Posts">
                    <CloudFeed posts={posts} statusFilter={statusFilter} closePosts={closePosts} getClosePosts={getClosePosts}/>
                  </div>
              </div>
              <div className="Map-Container">

              <UserMap closeUsers= {closeUsers} />

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
                <p>this button does not work currently</p>
                <Button>{current_user && "Confirm Location" || "Hide my Location"}</Button>
                </div>

        </div>
        </div>
        </div>

       );
     }
   }

export default Home
