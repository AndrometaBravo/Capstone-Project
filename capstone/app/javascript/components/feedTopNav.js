import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCog, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { DropdownMenu, DropdownToggle, UncontrolledDropdown, DropdownItem } from 'reactstrap'

class FeedTopNav extends React.Component {
  gearClick=()=>{
    console.log("gearClickran");
  }
  render () {
    return (
      <div className="feed-top-nav">

      <a href="/users/sign_out"><FontAwesomeIcon icon={faArrowLeft} color="grey" size="lg"/></a>
      <div id="user-icon-section">
        <img className="feed-avatar-small" src="https://i0.wp.com/zblogged.com/wp-content/uploads/2019/02/FakeDP.jpeg?resize=567%2C580&ssl=1" alt="Card image cap" />
      </div>
      <div id="feed-username">{
        this.props.current_user != null && this.props.current_user.firstname
      }
    </div>
      <div id="cog-dropdown">
      <UncontrolledDropdown>
            <DropdownToggle caret>
              <FontAwesomeIcon icon={faCog} color="white" size="lg" pull="right"/>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                  <a
                     href="/">
                     Home
                  </a>
              </DropdownItem>
              <DropdownItem>
                  <a
                     href="/about">
                     About
                  </a>
              </DropdownItem>
              <DropdownItem>
                  <a
                     href="/more">
                     More
                  </a>
              </DropdownItem>
              <DropdownItem>
                  <a
                     href="/users/sign_in">
                     Sign in
                  </a>
              </DropdownItem>
            </DropdownMenu>
       </UncontrolledDropdown>
       </div>

      </div>
       );
     }
   }
export default FeedTopNav
