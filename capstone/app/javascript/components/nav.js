import React from "react"
import PropTypes from "prop-types"
import { Nav, NavItem, a} from 'reactstrap'
import { BrowserRouter as  Router, Route } from 'react-router-dom'


class Navbar extends React.Component {
  render () {
      const {logged_in, sign_in, sign_out, current_user } = this.props
    return (

            <nav className = "navbar">
                 <a
                    className = "home"
                    href="/">
                    Home
                 </a>

                 <a
                     className = "about"
                     href="/about">
                     About Us
                 </a>

                 <a
                     className = "learn"
                     href="/more">
                     Learn More
                 </a>

                  <a
                      className = "signInOut"
                      href = {logged_in && sign_out || sign_in}>
                      {logged_in && "Sign Out"}
                      {!logged_in && "Sign In"}
                  </a>

                    <a className = "username">
                    {logged_in && current_user.email}
                    </a>

             </nav>
       );
     }
   }
export default Navbar
