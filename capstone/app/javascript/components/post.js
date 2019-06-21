import React from "react"
import PropTypes from "prop-types"
import { Container } from 'react-bootstrap'

class CloudPost extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
        form: {
          
           user_id: '',
           username: '',
           firstnamme: '',
           lat: '',
           lng: '',
           tags: '',
           post: '',
           post_status: '',
           picture_url: '',
           created_at: '',
           
          }
      }
  }

  handleChange = (event) => {
      let { form } = this.state
      form[event.target.name] = event.target.value
      this.setState({ form: form })
  }

  handleNewPost = () => {
      this.props.handleNewPost(this.state.form)
  }


  render() {
    
    return (

      <Container>
          
        <div>
        <center>
        <br/>
        <br/>
        <br/>
        <br/>

            <form id="postfeed">
            <br/>
            
            <p><font color = 'orange'>Please tell us about your project!</font></p>

            <input type='text' name='project type' onChange={this.handleChange} value={this.state.form.tags} placeholder=" project type ..."/>

            <br/>
            <br/>
            
            <input type='text' name='post content' onChange={this.handleChange} value={this.state.form.post} placeholder=" post content ..."/>

            <br/>
            <br/>
            
            <input type='number' name='privacy level' onChange={this.handleChange} value={this.state.form.post_status} placeholder=" privacy level ..."/>

            <br/>
            <br/>

            <input type='number' name='lat' onChange={this.handleChange} value={this.state.form.lat} placeholder=" latitude ..."/>

            <br/>
            <br/>

            <input type='number' name='lng' onChange={this.handleChange} value={this.state.form.lng} placeholder=" longitude ..."/>

            <br/>
            <br/>
            
            <button type="submit" onClick={this.handleNewPost} class="btn btn-secondary btn-sm">CREATE POST</button>
              
            <br/>

            <p align="center">[ <a className="" href="/feed"><font color = 'orange'>view feed</font></a> ]</p>

            </form>
            
        </center>
        </div>        
    
      </Container>

    )
  }
}

export default CloudPost
