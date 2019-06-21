import React from "react"
import PropTypes from "prop-types"
import { Switch, Route } from 'react-router-dom'
import { Nav, NavItem, NavLink} from 'reactstrap'

import Home from './home'
import CloudFeed from './feed'
import CloudPost from './post'
import AboutUs from './aboutus'
import Profile from './profile'
import LearnMore from './learnmore'

import { getPosts } from '../api/index.js'


class Routes extends React.Component {

    constructor(props) {
    super(props)
    this.state = {
      posts: [
          

      ]
    }
  }

  componentWillMount() {
    getPosts()
      .then(APIposts => {
        this.setState({
          posts: APIposts
        })
      })
  }

  render () {

      const {logged_in, sign_in, sign_out, current_user } = this.props
      
      let { posts } = this.state

    return (
        <Switch>

             <Route exact path="/" component={() => <Home posts={posts}/>} />
             <Route exact path="/about" component= {() => <AboutUs />} />
             <Route exact path="/more" component={() => <LearnMore />} />
             <Route path="/userprofile/:id" component={() => <Profile />} />
             <Route exact path="/feed" render={(props) => <CloudFeed posts={this.state.posts}/> } />

             <Route exact path="/post" render={(props) => <CloudPost handleNewPost={this.handleNewPost}/> } />

         </Switch>
       )
     }
   }

export default Routes
