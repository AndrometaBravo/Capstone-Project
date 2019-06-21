import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as  Router } from 'react-router-dom'

import {getUsers} from '../api/api'
import {myFriends} from '../api/api'

import Navbar from './nav'
import Routes from './routes'


export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            users: [],

        }
    }

        componentWillMount() {
            getUsers().then(APIusers => {
                this.setState({users: APIusers});
            })
        }

  render () {
      const {users} = this.state
      const {logged_in, sign_in, sign_out, current_user, edit_user } = this.props
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
               logged_in = {logged_in}
               sign_in = {sign_in}
               sign_out = {sign_out}
               current_user = {current_user}
               users = {users}
               edit_user = {edit_user}
           />
         </Router>

       );
     }
   }
