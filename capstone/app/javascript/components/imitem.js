import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Imitem extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }


    render(){
        const {index, friends} = this.props
      return (
        <div className = "imitem">
            <div>
                <Link to = {`/userprofile/${friends[index+1]}`}><img src = ""></img></Link>
            </div>
            <div>
                <p>username{friends[index+1].username}</p>
            </div>
        </div>

      )
    }
}

export default Imitem;
