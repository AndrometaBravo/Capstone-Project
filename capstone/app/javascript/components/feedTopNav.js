import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCog, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { DropdownMenu, DropdownToggle, UncontrolledDropdown, DropdownItem } from 'reactstrap'
import ChangeAvatar from './changeAvatar'

class FeedTopNav extends React.Component {
  gearClick=()=>{
    console.log("gearClickran");
  }
  render () {
    const{sign_in, sign_out, logged_in, current_user}=this.props
    console.log(sign_in, logged_in, sign_out);
    return (
      <div className="feed-top-nav">

      <a href={logged_in && `/userprofile/${current_user.id}` || sign_in}><FontAwesomeIcon icon={faArrowLeft} color="grey" size="lg"/></a>
      <div id="user-icon-section">
      {current_user != null &&
        <ChangeAvatar current_user={current_user}/>
      }
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
                     href="/createtag">
                     Create Tag
                  </a>
              </DropdownItem>
              <DropdownItem>
              <a
                  className = "signInOut"
                  href = {logged_in && sign_out || sign_in}>
                  {logged_in && "Sign Out"}
                  {!logged_in && "Sign In"}
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
