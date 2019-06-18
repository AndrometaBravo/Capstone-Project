import React, { Component } from 'react';
import ReactDOM from 'react-dom'


// parts
import Imbar from "./imbar"
import Userinfo from "./userinfo"
import Photos from "./photos"

class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
        }

    }

    render(){
    return (
    <div className = "profilepage">
        <div className = "header">
            <div className = "profilebuffer"></div>
            <div className = "profilepicdiv"></div>
            <h1>Username</h1>
            <div className = "blank"></div>
            <div className = "buttons">
                <button>We don't</button>
                <button>Do anything</button>
            </div>
        </div>

        <div className = "info">
            <Userinfo
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
            feed goes here
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
