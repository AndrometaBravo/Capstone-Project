import React from "react"
import PropTypes from "prop-types"

import {createTagName} from '../api/api'

class NewTag extends React.Component {
  constructor(props){
        super(props)
            this.state={
                tagname: ""
            }
            this.handleNewTag = this.handleNewTag.bind(this)
            this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
      const {form} = this.state
      this.setState({tagname: this.tagname.value})
  }

  handleNewTag(){
      createTagName(this.state).then(successPost => {
          alert("Tag Created")
      })
  }

  render() {
    return (
        <div>
            <br/>
            <form>
                <input
                    type='text'
                    name='tagname'
                    onChange={this.handleChange}
                    value={this.state.tagname}
                    ref={(tagname) => this.tagname = tagname}
                    placeholder=" enter tag name">
                </input>
                <button
                    type="submit"
                    onClick={this.handleNewTag}
                    className="btn btn-secondary btn-sm">CREATE TAG
                </button>
            </form>
        </div>

    )
  }
}
export default NewTag
