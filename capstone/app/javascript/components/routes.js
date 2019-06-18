import React from "react"
import PropTypes from "prop-types"
import { Nav, NavItem, NavLink} from 'reactstrap'
import { Switch, Route } from 'react-router-dom'

// routes
import Home from './home'
import AboutUs from './aboutus'
import LearnMore from './learnmore'

import CloudFeed from './feed'


class Routes extends React.Component {
    
    constructor(props) {
    super(props)
    this.state = {
      posts: [
          
          {
          user_id: '1',
          name: 'Miles',
          location: 'Gaslamp',
          post: 'React on Rails',
          post_status: '0',
        },
        {
          user_id: 2,
          name: 'Chris',
          location: 'North Park',
          post: 'Frontend JS',
          post_status: 1,
        },
        {
          user_id: 3,
          name: 'Sebastian',
          location: 'Seaport Village',
          post: 'VR Game Design',
          post_status: 2,
        },
        {
          user_id: 4,
          name: 'Travis',
          location: 'Coronado',
          post: 'Text Adventure',
          post_status: 3,
        },
                  {
          user_id: '1',
          name: 'Miles',
          location: 'Gaslamp',
          post: 'React on Rails',
          post_status: '0',
        },
        {
          user_id: 2,
          name: 'Chris',
          location: 'North Park',
          post: 'Frontend JS',
          post_status: 1,
        },
        {
          user_id: 3,
          name: 'Sebastian',
          location: 'Seaport Village',
          post: 'VR Game Design',
          post_status: 2,
        },
        {
          user_id: 4,
          name: 'Travis',
          location: 'Coronado',
          post: 'Text Adventure',
          post_status: 3,
        },
                  {
          user_id: '1',
          name: 'Miles',
          location: 'Gaslamp',
          post: 'React on Rails',
          post_status: '0',
        },
        {
          user_id: 2,
          name: 'Chris',
          location: 'North Park',
          post: 'Frontend JS',
          post_status: 1,
        },
        {
          user_id: 3,
          name: 'Sebastian',
          location: 'Seaport Village',
          post: 'VR Game Design',
          post_status: 2,
        },
        {
          user_id: 4,
          name: 'Travis',
          location: 'Coronado',
          post: 'Text Adventure',
          post_status: 3,
        },

        ],

    }
  }

    
    
  render () {
      
      const {logged_in, sign_in, sign_out, current_user } = this.props
      
      let { posts } = this.state
      

    return (
        <Switch>
        
        
        
             <Route path="/" exact component= {() => <Home />} />
             <Route path="/about" component= {() => <AboutUs />} />
             <Route path="/more" component={() => <LearnMore />} />
             
             <Route exact path="/feed" render={(props) => <CloudFeed posts={this.state.posts}/> } />


             
         </Switch>
       );
     }
   }
   
export default Routes
