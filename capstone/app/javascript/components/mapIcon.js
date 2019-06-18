import React, {Component} from 'react';


export default class MapIcon extends Component {
constructor (props) {
  super(props)
      this.state = {
        profile: {
          avatar: "https://www.learnacademy.org/app/uploads/2019/02/matt-200x200.jpg",
          username: "codePro123",
          userStatus: "Available"
        }
      }
  }
render () {
  let {username, userStatus, avatar} = this.state.profile
  return (
        <div className = "iconWindow">
            <img src = {avatar}/>
            <div><b>{username}</b></div>
            <div className= {userStatus}>{userStatus}</div>
        </div>
      )}
    }
