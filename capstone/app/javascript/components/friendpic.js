import React, { Component } from 'react';
import ReactDOM from 'react-dom'


class Friendpic extends Component {
    constructor(props){
        super(props)
        this.state = {

        }

    }


    render(){
        const {users, current_user, friends} = this.props
        let friendpic = friends.map((friend, index)=>{
            return(

                <a href = "userprofile/">
                    <img
                        key ={index}
                        src = {friend.id}>
                    </img>
                </a>
            )
        });
    return (


        <div>
            {friendpic}
        </div>


        )
    }
}

export default Friendpic;
