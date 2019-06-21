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

          <a align="left" href=""><img className="feed-avatar" id="postfeed" src ="https://cdn3.iconfinder.com/data/icons/back-to-the-future/512/delorean-03-512.png" alt=''/></a>

          <br/>
          
          <p><font color = 'orange'><strong>Marty McFly</strong></font> (88) ... @Downtown (<font color = 'orange'>{post.lat}</font>/<font color = 'orange'>{post.lng}</font>)
          
          <br/>
          <br/>
          
          {post.post}<font color = 'orange'></font> ({post.post_status})</p>

          <div class = 'row'>
          <div class = 'col-4'>
  
          <p align="left">posted:<br/><font color = 'orange'>{post.created_at}</font></p>
          
          </div>
          <div class = 'col-4'>
          
          <p align="center">project: <font color = 'orange'>React</font></p>
          
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

          </Container>
          
    )
  }
}

export default CloudFeed
