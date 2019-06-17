import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as  Router, Route } from 'react-router-dom'

import Navbar from './nav'
import Routes from './routes'


class App extends React.Component {
  render () {
      const {logged_in, sign_in, sign_out, current_user } = this.props
    return (
        <Router>
            <Navbar
                logged_in = {logged_in}
                sign_in = {sign_in}
                sign_out = {sign_out}
                current_user = {current_user}
            />
            <div className = "top"></div>
           <Routes

           />
         </Router>
       );
     }
   }
export default App
