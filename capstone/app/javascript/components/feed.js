import React from "react"
import PropTypes from "prop-types"

import { Container, ListGroup } from 'react-bootstrap'


class CloudFeed extends React.Component {


  render() {
    let{posts}=this.props
    return (

                <Container>
                <ListGroup id="postfeed">

                {posts.map((post, index) =>{

                return (

                <ListGroup.Item key={index}>

                <a align="left" href=""><img className="feed-avatar" id="postfeed" src ={post.picture_url} alt=''/></a>

                <h3><span className=''>Current Location: <br/>Gaslamp Starbucks</span></h3>

                <p><font color = 'orange'>{post.username}</font> [<font color = 'orange'>{post.user_id}</font>] is working on: <font color = 'orange'>{post.post}</font><font color = 'orange'></font> [<font color = 'orange'>{post.post_status}</font>]</p>

                <p align="right">(send a <font color = 'orange'></font> <a href=""><font color = 'orange'>reply</font></a> or <a href=""><font color = 'orange'>collaboration request</font></a>...)</p>

                <hr/>
                </ListGroup.Item>

                )
                })}

                </ListGroup>
                <br/>
                <a className="nav-link active" href=""><font color = 'orange'>NEW POST</font></a>

                </Container>

    )
  }

}


export default CloudFeed
