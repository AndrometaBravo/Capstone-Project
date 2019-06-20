import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import {oneUser} from '../api/api'


// parts
import Imbar from "./imbar"
import Userinfo from "./userinfo"
import Photos from "./photos"

class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: ""
        }
    }


    componentWillMount() {
        let id = this.props.match.params.id
        oneUser(id).then(APIusers => {
            this.setState({user: APIusers});
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
          let id = this.props.match.params.id
          oneUser(id).then(APIusers => {
              this.setState({user: APIusers});
          })
        }
    }


    render(){
        const {users} = this.props
        const {user} = this.state
        console.log(user);
    return (
    <div className = "profilepage">
        <div className = "header">
            <div className = "profilebuffer"></div>
            <div className = "profilepicdiv">
                <button id = "inputs"> Change Profile Pic</button>
            </div>
            <div className = "picoverlay"></div>
            <h1>{user.username}</h1>
            <div className = "blank"></div>
            <div className = "buttons">
                <button>We don't</button>
                <button>Do anything</button>
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
            />
        </div>

    </div>
      )
    }
}

export default Profile;
