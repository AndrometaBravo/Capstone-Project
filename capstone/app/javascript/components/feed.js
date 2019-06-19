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
                
                <hr/>

                <a align="left" href=""><img className="feed-avatar" id="postfeed" src ={post.picture_url} alt=''/></a>

                <br/>
                
                <p><font color = 'orange'><strong>{post.username}</strong></font> ({post.user_id}) ... @Starbucks:
                
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
                
                <p align="right">[ <a href=""><font color = 'orange'>comment</font></a> ]</p>

                </div>
                </div>

                <hr/>
                </ListGroup.Item>

                )
                })}

                </ListGroup>
                <br/>
                <p align="center"><a className="nav-link active" href=""><font color = 'orange'>NEW POST</font></a></p>

                </Container>

    )
  }

}

export default CloudFeed
