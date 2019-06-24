import React, { Component } from 'react';
import ReactDOM from 'react-dom'


class Photos extends Component {
    constructor(props){
        super(props)
        this.state = {
            friendarr: [0,0,0,0,0,0,0,0,0]
        }

    }


    render(){
        let {friendarr} = this.state
        let photos = friendarr.map((value, index)=>{
            return(

                <img
                    key ={index}
                    src = {friendarr[index]}>
                </img>
            )
        });
    return (


        <div>
            {photos}
        </div>


        )
    }
}

export default Photos;
