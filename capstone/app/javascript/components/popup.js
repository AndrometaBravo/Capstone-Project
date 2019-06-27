import React, {Component} from 'react';

export default class Popup extends Component {

  render(){
  let {user}= this.props
    return(
      <div>
      ${user.firstname}
      </div>
    )
  }
}
