import React from "react"
import PropTypes from "prop-types"
import { Nav, NavItem, NavLink} from 'reactstrap'
import { Switch, Route } from 'react-router-dom'
import{ getLocation } from './API'

// routes
import Home from './home'
import AboutUs from './aboutus'
import LearnMore from './learnmore'
import Profile from './profile'
import CloudFeed from './feed'


class Routes extends React.Component {

    constructor(props) {
    super(props)
    this.state = {
      postsFilter:[],
      myLocation: [],
      posts: []

    }
  }
  componentDidMount=()=>{
    getLocation().then(ApiLocation => {
    this.setState({ myLocation: ApiLocation })
    })
  }
  statusFilter=()=>{
    console.log("ran status filter");
  }

  render () {
      const {logged_in, sign_in, sign_out, current_user, users, edit_user} = this.props
      let { posts } = this.state

      let { posts, myLocation} = this.state
      let { statusFilter } = this
    return (
        <Switch>

             <Route exact path="/" component={() => <Home statusFilter={statusFilter} posts={posts} myLocation={myLocation}/>} />
             <Route exact path="/about" component= {() => <AboutUs />} />
             <Route exact path="/more" component={() => <LearnMore />} />

             <Route exact path="/userprofile/:id" component={(props) => <Profile {...props} users = {users} current_user = {current_user} edit_user = {edit_user}/>} />
             <Route exact path="/feed" component={() => <CloudFeed posts={posts}/> } />

         </Switch>
       );
     }
   }

export default Routes
