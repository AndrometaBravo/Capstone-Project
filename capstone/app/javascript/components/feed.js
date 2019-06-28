import React from "react"
import PropTypes from "prop-types"
import { Container, ListGroup, Button, ButtonGroup } from 'react-bootstrap'

class CloudFeed extends React.Component {
  constructor(props){
    super(props)
    this.state={
      statusFilterArr:[1,2,3],
      statusdisp:["Available", "Working", "Busy"],
      cSelected: [] ,
    }
  }
  handleFilterChange=(filterNum)=>{
    let{ statusFilterArr }=this.state
    if (statusFilterArr.includes(filterNum)){
      function checkval(num){
        console.log(statusFilterArr);
        return num != filterNum
      }
      this.setState({statusFilterArr : statusFilterArr.filter(checkval)})
    }else{
    statusFilterArr.push(filterNum)
  }
    this.setState(statusFilterArr)
  }
  render() {
    let{posts, user, closePosts}=this.props
    let {statusFilterArr, statusdisp}=this.state
    return (

        <Container>
        <ListGroup id="postfeed">
        <ButtonGroup>
         <Button color="primary" onClick={() => this.handleFilterChange(1)} active={this.state.cSelected.includes(1)}>One</Button>
         <Button color="primary" onClick={() => this.handleFilterChange(2)} active={this.state.cSelected.includes(2)}>Two</Button>
         <Button color="primary" onClick={() => this.handleFilterChange(3)} active={this.state.cSelected.includes(3)}>Three</Button>
       </ButtonGroup>
       {closePosts.map((post,index) => {
            if(statusFilterArr.includes(post.post_status)){
                return(


        <ListGroup.Item key={index}>


        <hr/>

        <a align="left" href=""><img className="feed-avatar" id="postfeed" src ={post.user.picture_url} alt=''/></a>

        <br/>

        <p><font color = 'orange'><strong>{post.user.username}</strong></font> ({post.user_id}) ... @Starbucks:

        <br/>
        <br/>

        {post.poststring}<font color = 'orange'></font> (statusdisp[{post.post_status}-1])</p>

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
export default CloudFeed
