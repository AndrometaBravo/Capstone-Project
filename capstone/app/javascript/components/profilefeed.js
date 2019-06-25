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
    console.log(posts);
    return (

        <Container>
        <ListGroup id="postfeed">
        {posts.map((post, index) =>{
          if(myPosts.includes(post)){
        return (

        <ListGroup.Item key={index}>




        <hr/>

        <a align="left" href=""><img className="feed-avatar" id="postfeed" src ={post.picture_url} alt=''/></a>

        <br/>

        <p><font color = 'orange'><strong>{post.user.username}</strong></font> ({post.user_id}) ... @Starbucks:

        <br/>
        <br/>

        {post.post}<font color = 'orange'></font> ({post.post_status})</p>

        <div className = 'row'>
        <div className = 'col-4'>

        <p align="left">posted: <font color = 'orange'>{post.created_at}</font></p>

        </div>
        <div className = 'col-4'>

        <p align="center">project: <font color = 'orange'>{post.tags.length > 0 && post.tags[0].tagname.tag || "no tags" }</font></p>

        </div>
        <div className = 'col-4'>

        <p align="right">[ <a href=""><font color = 'orange'>comment</font></a> ]</p>

        </div>
        </div>

        <hr/>
        </ListGroup.Item>

        )
        }
        })}

        </ListGroup>
        <br/>
        <p align="center"><a className="nav-link active" href=""><font color = 'orange'>NEW POST</font></a></p>


        </Container>
)
}}
export default ProfileFeed
