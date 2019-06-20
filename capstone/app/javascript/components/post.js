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

            <form>
            
            <p><font color = 'orange'>Please tell us about your project!</font></p>
            
            <input type='number' name='user_id' onChange={this.handleChange} value={this.state.form.user_id} placeholder=" user id ..."/>

            <br/>
            <br/>

            <input type='text' name='username' onChange={this.handleChange} value={this.state.form.username} placeholder=" username ..."/>

            <br/>
            <br/>

            <input type='text' name='firstnamme' onChange={this.handleChange} value={this.state.form.firstnamme} placeholder=" firstname ..."/>

            <br/>
            <br/>
            
            <input type='number' name='lat' onChange={this.handleChange} value={this.state.form.lat} placeholder=" lat ..."/>

            <br/>
            <br/>

            <input type='number' name='lng' onChange={this.handleChange} value={this.state.form.lng} placeholder=" lng ..."/>

            <br/>
            <br/>
            
            <input type='text' name='tags' onChange={this.handleChange} value={this.state.form.tags} placeholder=" tags ..."/>

            <br/>
            <br/>
            
            <input type='text' name='post' onChange={this.handleChange} value={this.state.form.post} placeholder=" post ..."/>

            <br/>
            <br/>

            <input type='number' name='post_status' onChange={this.handleChange} value={this.state.form.post_status} placeholder=" post status ..."/>

            <br/>
            <br/>

            <input type='text' name='created_at' onChange={this.handleChange} value={this.state.form.created_at} placeholder=" created at ..."/>

            <br/>
            <br/>

            <button type="submit" onClick={this.handleNewPost} class="btn btn-secondary btn-sm">CREATE POST</button>
              
            <a className="nav-link active" href="/"><font color = 'orange'>view feed</font></a>

            </form>
            
        </center>
        </div>        
    
      </Container>

    )
  }
}

export default CloudPost
