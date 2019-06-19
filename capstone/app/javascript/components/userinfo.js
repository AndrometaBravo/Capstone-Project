import React, { Component } from 'react';

class Userinfo extends Component {
    constructor(props){
        super(props)
        this.state = {
            bio: "wefugweekfugfekug"
        }

    }

    render(){
        let {bio} = this.state
        console.log(bio);
      return (
        <div className = "userinfo">
            <h2> About Name!</h2>
            <h3>Bio:</h3>
            <form className = "about" >
                <textarea id = "bioupdate" placeholder = "{user.bio}" value = {this.state.bio} ref={(bio) => this.bio = bio}></textarea>
                <p>Edit Bio: Characters left: {150 - this.state.bio.length}</p>
                <input type = "submit" value = "submit" />
            </form>
            <hr/>
            <label id = "boldme">DOB: </label>
            <label> </label>
            <br/>

            <label id = "boldme">Location: </label>
            <label> </label>
            <br/>

            <label id = "boldme">Gender:</label>
            <label> </label>
        </div>
      )
    }
}

export default Userinfo;
