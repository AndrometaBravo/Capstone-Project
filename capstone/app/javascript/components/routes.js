import React from "react"
import PropTypes from "prop-types"
import { Nav, NavItem, NavLink} from 'reactstrap'
import { Switch, Route } from 'react-router-dom'

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
      posts: [
          {
          user_id: '1',
          username: 'MilesUser',
          firstnamme: 'Miles',
          lat: 32.708910,
          lng:-117.159447,
          tags: 'React on Rails',
          post: 'lets meetup and build something',
          post_status: '0',
          picture_url: "https://www.evolutionsociety.org/userdata/news_picupload/pic_sid189-0-norm.jpg",
          created_at: "",
        }
        ]

    }
  }



  render () {

      const {logged_in, sign_in, sign_out, current_user } = this.props

      let { posts } = this.state


    return (
        <Switch>

             <Route path="/" component={() => <Home posts={posts}/>} />
             <Route path="/about" component= {() => <AboutUs />} />
             <Route path="/more" component={() => <LearnMore />} />
             <Route path="/userprofile/:id" component={() => <Profile />} />

             <Route exact path="/feed" render={(props) => <CloudFeed posts={this.state.posts}/> } />

         </Switch>
       );
     }
   }

export default Routes
