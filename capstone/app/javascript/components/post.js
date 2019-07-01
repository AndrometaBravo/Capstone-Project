import React from "react"
import PropTypes from "prop-types"
import { Container } from 'react-bootstrap'

import {createPost} from '../api/index'

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
     this.setState({ post_status: this.post_status.value })
 }




 render() {
     console.log(this.state.poststring);
     console.log(this.state.post_status);

   return (

     <div id="post-container">
           <form id="postfeed" >
           <textarea className="post-comment-text" name='post content' onChange={this.handleChange} value={this.state.poststring} ref={(poststring) => this.poststring = poststring} placeholder=" post content ..."></textarea>



           <input type='number' name='privacy level' onChange={this.handleChange} value={this.state.post_status} ref={(post_status) => this.post_status = post_status} placeholder=" privacy level ..."/>



           <button type="submit"  onClick={this.handleNewPost} id="post-submit-btn"className="btn btn-secondary btn-sm">CREATE POST</button>

           </form>
     </div>

   )
 }
}

export default CloudPost