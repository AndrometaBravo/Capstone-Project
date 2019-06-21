import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import Imitem from "./imitem"


class Imbar extends Component {
    constructor(props){
        super(props)
        this.state = {

        }

    }

    render(){
        const {users, current_user, friends} = this.props
        let imbar = friends.map((friend, index)=>{
                return(
                    <Imitem
                        friend = {friend}
                        key = {index}
                        index = {index}
                        friends = {friends}
                        users = {users}
                    />
                )
        });


    return (
        <div className = "imbar">
            <h3>Message a Friend</h3>
            {imbar}
        </div>
          )
        }
    }

export default Imbar;
