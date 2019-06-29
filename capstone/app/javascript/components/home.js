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
import{ getCloseUsers, updatelocation } from './API'
import Avatar from './avatar'
import ChangeAvatar from './changeAvatar'
import UserMap from './userMap'



class Home extends React.Component {
  constructor(props){
    super(props)
    this.state={
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
  render () {
    console.log();
    let{ feed, closeUsers, posts }=this.state
    let{ renderProfiles, setLatLng }=this
    const{  myLocation, statusFilter, getCloseUsers, current_user, sign_in, sign_out, logged_in }=this.props

    return (

        <div className="grid-container">
              <div className="Feed">
                <FeedTopNav current_user={current_user} sign_in={sign_in} sign_out={sign_out} logged_in={logged_in}/>
                  <div className="Feed-Posts">
                    <CloudFeed posts={posts} statusFilter={statusFilter} closeUsers={closeUsers} getCloseUsers={getCloseUsers}/>
                  </div>
              </div>
              <div className="Map-Container">

              <UserMap setLatLng={setLatLng} closeUsers= {closeUsers} />

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
                <Button onClick={this.currentLocationFetch}>{current_user && "Confirm Location" || "Hide my Location"}</Button>
                </div>

        </div>
        </div>

       );
     }
   }

export default Home
