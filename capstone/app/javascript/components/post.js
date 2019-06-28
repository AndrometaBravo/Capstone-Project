import React from "react"
import PropTypes from "prop-types"
import { Container, Form} from 'react-bootstrap'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonGroup, Button} from 'reactstrap';

import {createPost} from '../api/index'
import {allTagNames} from '../api/api'

class CloudPost extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        form:{
           user_id: this.props.current_user.id,
           lat: '',
           lng: '',
           poststring: '',
           post_status: '',
        },

           tag_id: "",
           tagdropdownOpen: false,
           statusdropdownOpen: false,
           tagnames: [],


          }
          this.handleNewPost = this.handleNewPost.bind(this);
          this.handleChange = this.handleChange.bind(this);
          this.handleIdChange = this.handleIdChange.bind(this);
          this.tagtoggle = this.tagtoggle.bind(this);
          this.tagselect = this.tagselect.bind(this);

      }

      handleNewPost(){
          createPost(this.state.form, this.state.tag_id).then(successPost => {
              this.setState({post_status_display: "available"})
              alert("Post Submitted")
              console.log("submitted");
          })
      }


      handleChange(event){
          const {form} = this.state
          form[event.target.name] = event.target.value
          this.setState({form})
      }
      handleIdChange(event){
          this.setState({ tag_id: this.tag_id.value })

      }


      tagtoggle() {
        this.setState(prevState => ({
          tagdropdownOpen: !prevState.tagdropdownOpen
        }));
      }


      tagselect(event) {
        this.setState({
          tagdropdownOpen: !this.state.tagdropdownOpen,
          tag_id: event.target.value
        });
      }


      componentWillMount() {
          allTagNames().then(APItagnames => {
              this.setState({tagnames: APItagnames});
          }
      )}




  render() {
      console.log(this.state.tag_id);
      console.log(this.state.form.poststring);
      console.log(this.state.form.post_status);
      let {tagnames} = this.state
      let dropitems = tagnames.map((tag, index)=>{
          return(
               <DropdownItem
                    onChange = {this.handleIdChange}
                    ref={(tag_id) => this.tag_id = tag_id}
                    onClick = {this.tagselect}
                    value = {tag.id}>
                    {tag.tag}
                </DropdownItem>
          )
      });

    return (

      <Container>

        <div>
        <center>
            <form id="postfeed" >
            <br/>
                <p>
                    <font color = 'orange'>Please tell us about your project!</font>
                </p>

                <Form.Control as="select" inputRef={post_status => this.post_status = post_status} onChange={this.handleChange} name = "post_status">
                  <option> </option>
                  <option value = "1">Available</option>
                  <option value = "2">Working</option>
                  <option value = "3">Busy</option>
                </Form.Control>


                <br/>

                <Dropdown as={ButtonGroup} isOpen={this.state.tagdropdownOpen} toggle={this.tagtoggle} onClick = {this.tagselect}>
                    <Button variant="success">Tags</Button>

                    <DropdownToggle split variant="success" id="dropdown-split-basic" />

                    <DropdownMenu>
                        {dropitems}
                    </DropdownMenu>
                </Dropdown>

                <input
                    type='text'
                    name='poststring'
                    onChange={this.handleChange}
                    value={this.state.form.poststring}
                    ref={(poststring) => this.poststring = poststring}
                    placeholder=" post content ..."
                />

                <br/>

                <button
                    type="submit"
                    onClick={this.handleNewPost}
                    className="btn btn-secondary btn-sm">CREATE POST
                </button>

                <br/>

                <p
                    align="center">
                    [
                        <a className="" href="/feed">
                            <font color = 'orange'>view feed</font>
                        </a>
                    ]
                </p>

            </form>

        </center>
        </div>

      </Container>

    )
  }
}

export default CloudPost
