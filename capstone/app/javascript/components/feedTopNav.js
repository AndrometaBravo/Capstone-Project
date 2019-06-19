import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCog, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

class FeedTopNav extends React.Component {
  render () {
    return (
      <div className="feed-top-nav">
      <FontAwesomeIcon icon={faArrowLeft} color="grey" size="lg"/>
      <div id="user-icon-section">
        <img className="feed-avatar-small" src="https://i0.wp.com/zblogged.com/wp-content/uploads/2019/02/FakeDP.jpeg?resize=567%2C580&ssl=1" alt="Card image cap" />
      </div>
      <div id="feed-username">User Name</div>
          <FontAwesomeIcon icon={faCog} color="grey" size="lg" pull="right"/>
      </div>
       );
     }
   }
export default FeedTopNav
