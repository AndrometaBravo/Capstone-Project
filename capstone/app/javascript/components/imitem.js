import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Imitem extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }


    render(){
        const {index, friends, friend, users} = this.props
      return (
        <div className = "imitem">
            <div>
                <Link to = {`/userprofile/${friend.id}`}><img src = ""></img></Link>
            </div>
            <div>
                <p>{friend.username}</p>
            </div>
        </div>

      )
    }
}

export default Imitem;
