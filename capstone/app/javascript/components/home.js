import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom'
//sebastians map container
import FeedTopNav from "./feedTopNav.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCog } from '@fortawesome/free-solid-svg-icons'
import{Card, CardImg, Button, CardTitle, Collapse, CardBody, CardSubtitle, CardText} from 'reactstrap'
import CloudFeed from  './feed'
import CloudPost from './post'
import NewPostBox from './newPostBox'
import{ getCloseUsers, updatelocation, getClosePosts } from './API'
import Avatar from './avatar'
import ChangeAvatar from './changeAvatar'
import UserMap from './userMap'



class Home extends React.Component {
  constructor(props){
    super(props)
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
    this.state={
      closePosts:[],
      closeUsers:[],
      posts:[],
      test: "it worked",
      visible: "modalHide",
      userLocationData:
        {
          lat: "",
          lng: "",
          user_id: "",
          }

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
    getClosePosts()
    .then(APIposts => {
      this.setState({
        closePosts: APIposts
      })
    })
  }
   componentDidMount(){
     let{current_user}=this.props
     if(current_user != null){
       this.setState(prevState => ({
            userLocationData: {
                ...prevState.userLocationData,
                user_id: this.props.current_user.id,
            }
        }))
     }else{
       console.log("You are not logged in");
     }
   }
   setLatLng=(latLng)=>{
     let formattedLat = latLng.lat.toFixed(6)
     let formattedLng = latLng.lng.toFixed(6)
     this.setState(prevState => ({
          userLocationData: {
              ...prevState.userLocationData,
              lat: formattedLat,
              lng: formattedLng
          }
      }))
   }

   currentLocationFetch=()=>{
     updatelocation(this.state.userLocationData).then(successPost => {
         alert(`location submitted to DB lat is ${this.state.userLocationData.lat}`)
     })
   }
   toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  render () {
    console.log();
    let{ feed, closeUsers, posts, closePosts}=this.state
    let{ renderProfiles, setLatLng }=this
    const{  myLocation, statusFilter, getCloseUsers, current_user, sign_in, sign_out, logged_in }=this.props
      console.log(closeUsers);
    return (

        <div className="grid-container">
              <div className="Feed">
                <FeedTopNav current_user={current_user} sign_in={sign_in} sign_out={sign_out} logged_in={logged_in} />
                  <div className="Feed-Posts">
                    <CloudFeed posts={posts} statusFilter={statusFilter} sign_in={sign_in}  logged_in={logged_in} closeUsers={closeUsers} getCloseUsers={getCloseUsers} closePosts={closePosts}/>
                  </div>
              </div>
              <div className="Map-Container">

              <UserMap setLatLng={setLatLng} closeUsers= {closeUsers} />


              {current_user != null &&
                <div className="Comment-Box" >
                <Button id="post-toggle" color="primary" onClick={this.toggle}>New Post</Button>
                  <Collapse isOpen={this.state.collapse}>
                  <CloudPost current_user={current_user}/>
                  </Collapse>

                </div>
              }

              <div className="Filter-Area">
                <p className="mid-title">Your Location</p>
                <Button onClick={this.currentLocationFetch}>{current_user && "Confirm Location" || "Hide my Location"}</Button>
                <div>
                  </div>
                <div>
                </div>
                </div>

        </div>
        </div>

       );
     }
   }

export default Home
