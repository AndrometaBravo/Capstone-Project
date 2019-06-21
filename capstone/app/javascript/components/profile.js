import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import {oneUser} from '../api/api'
import {myFriends} from '../api/api'

import {createPost} from '../api/index'

// parts
import Imbar from "./imbar"
import Userinfo from "./userinfo"
import Photos from "./photos"
import CloudFeed from "./feed"
import CloudPost from "./post"
import Friendpic from './friendpic'

class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: "",
            friends: []

        }
    }

    componentWillMount() {
        let id = this.props.match.params.id
        oneUser(id).then(APIusers => {
            this.setState({user: APIusers});
        })
        myFriends().then(APIfriends => {
            this.setState({friends: APIfriends});
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
        }
    }


    render(){
        const {users, current_user, edit_user, posts} = this.props
        const {user, friends} = this.state
        console.log(friends);
        console.log(user);
        console.log(friends.includes(user));

    return (
    <div className = "profilepage">
        <div className = "header">
            <div className = "profilebuffer"></div>
            <div className = "profilepicdiv">
                <button id = "inputs"> Change Profile Pic</button>
                <div className = "picoverlay"></div>
            </div>
            <h1>{user.username}</h1>
            <div className = "blank"></div>
            <div className = "buttons">
                { current_user.id != user.id && <button>Send a friend Request</button> || current_user.id != user.id && <button>Send a friend Request</button>}
                {current_user.id != user.id && <button>Send a Message</button>}
                {current_user.id == user.id && <button><a href = {edit_user}>Edit Profile</a></button>}
                {current_user.id == user.id && <button>Other Button</button>}

            </div>
        </div>

        <div className = "info">
            <Userinfo
                user = {user}
            />
        </div>

        <div className = "photos">
            <hr/>
            <h3>Photos</h3>
                <Photos
                />
        </div>
        <div className = "friends">
            <hr/>
            <h3>Friends</h3>
            <Friendpic
                friends = {friends}
            />
        </div>
        <div className = "body">
            <div>
                { current_user.id == user.id &&
                <CloudPost
                    posts = {posts}
                    current_user = {current_user}
                    handleNewPost = {this.handleNewPost}
                 />}

                <CloudFeed
                    posts = {posts}
                 />

            </div>
        </div>
        <div className = 'im'>
            <Imbar
                users = {users}
                current_user = {current_user}
                friends = {friends}
            />
        </div>

    </div>
      )
    }
}

export default Profile;
