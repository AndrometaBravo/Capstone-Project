import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import {oneUser} from '../api/api'
import {myFriends} from '../api/api'
import {myFriendsIds} from '../api/api'
import {makeFriends} from '../api/api'
import {sentpendingFriends} from '../api/api'
import {pendingFriends} from '../api/api'
import {goodbyeToYou} from '../api/api'

import {createPost} from '../api/index'

// parts
import Imbar from "./imbar"
import Userinfo from "./userinfo"
import Photos from "./photos"
import ProfileFeed from "./profilefeed"
import CloudPost from "./post"
import Friendpic from './friendpic'

class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: "",
            friends: [],
            friendsids:[],
            pendingids:[],
            sentpendingids:[],
            blocked: [],
            request: {
                sender_id: this.props.current_user.id,
                recipient_id: "",
                status:0
            },
            accept:{
                sender_id: this.props.current_user.id,
                recipient_id: "",
                status:1
            },
            reject:{
                sender_id: this.props.current_user.id,
                recipient_id: "",
                status:2
            },
            block:{
                sender_id: this.props.current_user.id,
                recipient_id: "",
                status:3
            }


        }
         this.handleFriendRequest = this.handleFriendRequest.bind(this);
         this.handleAccept = this.handleAccept.bind(this);
         this.handleReject = this.handleReject.bind(this);
         this.destroyFriendship = this.destroyFriendship.bind(this)
    }

    componentWillMount() {
        let id = this.props.match.params.id
        oneUser(id).then(APIusers => {
            this.setState({user: APIusers});
        })
        myFriends().then(APIfriends => {
            this.setState({friends: APIfriends});
        })
        myFriendsIds().then(APIfriendsids => {
            this.setState({friendsids: APIfriendsids});
        })
        pendingFriends().then(APIpendingids => {
            this.setState({pendingids: APIpendingids});
        })
        sentpendingFriends().then(APIpendingids => {
            this.setState({sentpendingids: APIpendingids});
        })

    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
          let id = this.props.match.params.id
          oneUser(id).then(APIusers => {
              this.setState({user: APIusers});
          })
          myFriends().then(APIfriends => {
              this.setState({friends: APIfriends});
          })
          myFriendsIds().then(APIfriendsids => {
              this.setState({friendsids: APIfriendsids});
          })
          pendingFriends().then(APIpendingids => {
              this.setState({pendingids: APIpendingids});
          })
          sentpendingFriends().then(APIpendingids => {
              this.setState({sentpendingids: APIpendingids});
          })
        }
    }

    handleFriendRequest(event){
        let {user, request} = this.state
        let friendrequest = request
        friendrequest.recipient_id = user.id
        request = friendrequest
        this.setState({request: request})
        makeFriends(this.state.request).then(successRequest =>{
            alert("Request Sent")
        })
        window.location.reload()
    }

    handleAccept(event){
        let {user, accept} = this.state
        let friendaccept = accept
        friendaccept.recipient_id = user.id
        accept = friendaccept
        this.setState({accept: accept})
        makeFriends(this.state.accept).then(successRequest =>{
            alert("You Are Now Friends")
        })
        window.location.reload()
    }

    handleReject(event){
        let {user, reject} = this.state
        let friendreject = reject
        friendreject.recipient_id = user.id
        reject = friendreject
        this.setState({reject: reject})
        makeFriends(this.state.reject).then(successRequest =>{
            alert("You Are Now Friends")
        })
        window.location.reload()
    }
    destroyFriendship(){
        let {user} = this.state
        goodbyeToYou(user.id).then(successRequest =>{
            alert("You and this User Are no Longer Friends")
        })
    }




    render(){
        const { users, current_user,
            edit_user, posts
        } = this.props

        const { user, friends,
            friendsids, pendingids,
            sentpendingids, blocked
        } = this.state

    return (

    <section id="intro" className="intro">

         <div className="overlay">

           <div id ='title'>
            <h1>CLOUD CULTURE</h1>
            <hr/>
         </div>

               <a align="left" href=""><img className="feed-avatar" id="postfeed" src ="https://cdn3.iconfinder.com/data/icons/back-to-the-future/512/marty-mcfly-512.png" alt=''/></a>
           <h3>{user.firstname} {user.lastname} ({user.username})<br/></h3>

           <div className = "buttons">
               {!friendsids.includes(user.id) && sentpendingids.includes(user.id) && <button onClick = {this.handleAccept}>Accept</button>}
               {!friendsids.includes(user.id) && sentpendingids.includes(user.id) && <button onClick = {this.handleReject}>Reject</button>}
               {friendsids.includes(user.id) && <button onClick = {this.destroyFriendship}>UnFriend</button> || current_user.id != user.id && !pendingids.includes(user.id) && <button onClick = {this.handleFriendRequest}>Send a friend Request</button> }
               {current_user.id != user.id && <button>Send a Message</button>}
               {current_user.id == user.id && <button><a href = {edit_user}>Edit Profile</a></button>}
               {current_user.id == user.id && <button>Other Button</button>}
           </div>

           <h4>
               About {user.firstname}:<br/>
               '{user.bio}'<br/><br/>
               Current Cloud:<br/>
               {user.lat} / {user.lng}<br/><br/>
               Age: {user.age}<br/><br/>
               Recent Posts:<br/><br/>
           </h4>

           <ProfileFeed
                posts = {posts}
                user = {user}
                current_user = {current_user}
           />

         </div>

   </section>

      )
    }
}

export default Profile;
