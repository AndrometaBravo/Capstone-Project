import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import Imitem from "./imitem"

class Imbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            friends: [0,1,2,3,4,5,6]
        }

    }

    render(){
        let {friends} = this.state
        let imbar = friends.map((value, index)=>{
            return(
                <Imitem
                    key = {index}
                    index = {index}
                    friends = {friends}
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
