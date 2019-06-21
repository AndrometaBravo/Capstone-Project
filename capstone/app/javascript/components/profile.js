import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import {oneUser} from '../api/api'
import {myFriends} from '../api/api'

// parts
import Imbar from "./imbar"
import Userinfo from "./userinfo"
import Photos from "./photos"

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
        const {users, current_user, edit_user} = this.props
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
            <Photos
            />
        </div>
        <div className = "body">
        <div>
            <div className = "post">
                <h3>POST Something</h3>
                <textarea placeholder = "Tell me about your day"></textarea>
                <br/>
                <button>Submit</button>
            </div>
            <div className = "feed">
                <h3>Feed:</h3>
            </div>

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
