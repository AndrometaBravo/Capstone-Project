import React from "react"
import PropTypes from "prop-types"
import { Container, ListGroup } from 'react-bootstrap'

class CloudFeed extends React.Component {

  render() {
    let{posts}=this.props
    return (

          <Container>
          <br/>
          <ListGroup id="postfeed">

          {posts.map((post, index) =>{

          return (

          <ListGroup.Item key={index}>
          
          <hr/>

          <a align="left" href=""><img className="feed-avatar" id="postfeed" src ={post.picture_url} alt=''/></a>

          <br/>
          
          <p><font color = 'orange'><strong>{post.username}</strong></font> ({post.user_id}) ... @Downtown (<font color = 'orange'>{post.lat}</font>/<font color = 'orange'>{post.lng}</font>)
          
          <br/>
          <br/>
          
          {post.post}<font color = 'orange'></font> ({post.post_status})</p>

          <div class = 'row'>
          <div class = 'col-4'>
  
          <p align="left">posted: <font color = 'orange'>{post.created_at}</font></p>
          
          </div>
          <div class = 'col-4'>
          
          <p align="center">project: <font color = 'orange'>{post.tags}</font></p>
          
          </div>
          <div class = 'col-4'>
          
          <p align="right">[ <a href="/post"><font color = 'orange'>new post</font></a> ]</p>

          </div>
          </div>

          <hr/>
          </ListGroup.Item>

          )
          })}

          </ListGroup>
          <br/>

          <p align="center">[ <a className="" href="/post"><font color = 'orange'>new post</font></a> ]</p>

          <br/>
          <br/>
          </Container>
          
    )
  }

}

export default CloudFeed
