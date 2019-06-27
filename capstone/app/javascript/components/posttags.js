import React from "react"
import PropTypes from "prop-types"
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonGroup, Button } from 'reactstrap';


import {allTagNames} from '../api/api'

class PostTags extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
            dropdownOpen: false,
            tagnames: []
          }
          this.toggle = this.toggle.bind(this);

      }

      toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }

      componentWillMount() {
          allTagNames().then(APItagnames => {
              this.setState({tagnames: APItagnames});
          }
      )}


  render() {
      let {tagnames} = this.state
      let dropitems = tagnames.map((tag, index)=>{
          return(
               <DropdownItem
                    href="#/action-1"
                    value = {tag.tag}>
                    {tag.tag}
                </DropdownItem>
          )
      });

    return (
        <Dropdown as={ButtonGroup} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <Button variant="success">Tags</Button>

            <DropdownToggle split variant="success" id="dropdown-split-basic" />

            <DropdownMenu>
                {dropitems}
            </DropdownMenu>
        </Dropdown>

    )
  }
}

export default PostTags
