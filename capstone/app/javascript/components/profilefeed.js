import React from "react"
import PropTypes from "prop-types"
import { Container, ListGroup, Button, ButtonGroup } from 'react-bootstrap'

class ProfileFeed extends React.Component {
  constructor(props){
    super(props)
    this.state={
      cSelected: [] ,
      myPosts:[]
    }
  }

  render() {
    let{posts, user}=this.props
    let {myPosts}=this.state
        let allmyposts = posts.map((post, index) =>{
          if(post.user_id == user.id){
                return (
                        <h4>{post.poststring}</h4>
                )}})
            return(
                <div>
                    {allmyposts}
                </div>
            )



        }


}
export default ProfileFeed
