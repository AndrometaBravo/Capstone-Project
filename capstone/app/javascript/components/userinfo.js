import React, { Component } from 'react';

class Userinfo extends Component {
    constructor(props){
        super(props)
        this.state = {
            bio: ""
        }

    }

    render(){
        let {bio} = this.state
        const {user} = this.props
        console.log(bio);
      return (
        <div className = "userinfo">
            <h2> About {user.firstname}</h2>
            <h3>Bio:</h3>
            <form className = "about" >
                <textarea id = "bioupdate" placeholder = {user.bio} value = {this.state.bio} ref={(bio) => this.bio = bio}></textarea>
                <p>Edit Bio: Characters left: {150 - this.state.bio.length}</p>
                <input type = "submit" value = "submit" />
            </form>
            <hr/>
            <label id = "boldme">DOB: </label>
            <label> {user.age}</label>
            <br/>

            <label id = "boldme">Lattitude: </label>
            <label> {user.lat}</label>
            <br/>
            <label id = "boldme">Longitude: </label>
            <label> {user.lng}</label>
            <br/>

            <label id = "boldme">Gender:</label>
            <label>{user.gender} </label>
        </div>
      )
    }
}

export default Userinfo;
