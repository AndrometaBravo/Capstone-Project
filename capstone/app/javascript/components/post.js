import React from "react"
import PropTypes from "prop-types"
import { Container, Input, Form } from 'react-bootstrap'

import {createPost} from '../api/index'
import{ getLocation } from './API'

class CloudPost extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

            user_id: this.props.current_user.id,
           lat: '',
           lng: '',
           poststring: '',
           post_status: '',


          }
          this.handleNewPost = this.handleNewPost.bind(this);
          this.handleChange = this.handleChange.bind(this);

      }

      handleNewPost(){
          createPost(this.state).then(successPost => {
              alert("Post Submitted")
              console.log("submitted");
          })
      }


  handleChange(event){
      this.setState({ poststring: this.poststring.value })
      this.setState({ lat: this.lat.value })
      this.setState({ lng: this.lng.value })
      this.setState({ post_status: this.post_status.value })
  }
  componentDidMount=()=>{
    getLocation().then(ApiLocation => {
    if (ApiLocation != null){
    this.setState({ lat: ApiLocation.location.lat })
    this.setState({ lng: ApiLocation.location.lng })
  }else{
    console.log("Geolocation data cannot be retrieved. Check API quotas");
  }
    })
    this.setState({user_id: this.props.current_user.id})
  }
  render() {
      console.log(this.state.poststring);
      console.log(this.state.post_status);
      console.log(this.state.lat);
      console.log(this.state.lng);
      console.log(this.props.current_user);
        console.log(this.state.myLocation);

    return (

      <Container>

        <div>
        <center>

            <form id="postfeed" >
            <br/>

            <p><font color = 'orange'>Please tell us about your project!</font></p>

            <br/>
            <br/>

            <input type='text' name='post content' onChange={this.handleChange} value={this.state.poststring} ref={(poststring) => this.poststring = poststring} placeholder=" post content ..."/>

            <br/>
            <br/>

            <input type='number' name='privacy level' onChange={this.handleChange} value={this.state.post_status} ref={(post_status) => this.post_status = post_status} placeholder=" privacy level ..."/>

            <br/>
            <br/>

            <input type='number' name='lat' onChange={this.handleChange} value={this.state.lat} ref={(lat) => this.lat = lat}placeholder=" latitude ..."/>

            <br/>
            <br/>

            <input type='number' name='lng' onChange={this.handleChange} value={this.state.lng} ref={(lng) => this.lng = lng} placeholder=" longitude ..."/>

            <br/>
            <br/>

            <button type="submit"  onClick={this.handleNewPost} class="btn btn-secondary btn-sm">CREATE POST</button>

            <br/>

            <p align="center">[ <a className="" href="/feed"><font color = 'orange'>view feed</font></a> ]</p>

            </form>

        </center>
        </div>

      </Container>

    )
  }
}

export default CloudPost
