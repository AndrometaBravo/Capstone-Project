import React from "react"
import PropTypes from "prop-types"

import { Container, ListGroup } from 'react-bootstrap'


class CloudFeed extends React.Component {
    
   
  render() {
    return (
      
                <Container>
          
                <ListGroup id="postfeed">
                  
                {this.props.posts.map((post, index) =>{
                  
                return (
                
                <ListGroup.Item key={index}>

                <a align="left" href=""><img class="img-fluid rounded-circle" id="postfeed" src = 'http://vendmine.com/wp-content/uploads/2016/02/VM-Cloud-Icon-100px.png' alt=''/></a>
    
                <h3><span className=''>Current Location: <br/>Gaslamp Starbucks</span></h3>
                
                <p><font color = 'orange'>{post.name}</font> [<font color = 'orange'>{post.user_id}</font>] is working on: <font color = 'orange'>{post.post}</font><font color = 'orange'></font> [<font color = 'orange'>{post.post_status}</font>]</p>
    
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
