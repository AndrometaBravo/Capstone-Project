import React from "react"
import PropTypes from "prop-types"
import { Container, ListGroup, Button, ButtonGroup } from 'react-bootstrap'

class ProfileFeed extends React.Component {
  constructor(props){
    super(props)
    this.state={
      cSelected: [] ,
      myPosts:[],
      statusdisp:["Available", "Working", "Busy", "Friend Request", "Friended", "Rejected", "Blocked"],
    }
  }

  render() {
    let{posts, user, current_user}=this.props
    let {myPosts}=this.state
        let allmyposts = posts.map((post, index) =>{
          if(post.user_id == user.id){
                return (
                        <li id = "profilePost">{post.created_at.substring(0, 10)} - {post.poststring}</li>
                )}})
            return(
                <div>
                    {allmyposts}
                </div>
            )



        }


}
export default ProfileFeed
