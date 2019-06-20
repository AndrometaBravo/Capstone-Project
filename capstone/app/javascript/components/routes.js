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
      myLocation: [],
      posts: [
            {
           user_id: '88',
           username: 'Marty McFly',
           firstnamme: 'Miles',
           lat: 32.708910,
           lng:-117.159447,
           tags: 'React',
           post: 'Hey Doc this coffee sucks, go grab Einstein and pick me up! Cloud Culture is a location-based collaboration platform for remote web workers, students and computer coders ...',
           post_status: '2',
           picture_url: "https://cdn3.iconfinder.com/data/icons/back-to-the-future/512/marty-mcfly-512.png",
           created_at: "5pm",
         },
         {
           user_id: '88',
           username: 'Doc Brown',
           firstnamme: 'Miles',
           lat: 32.708910,
           lng:-117.159447,
           tags: 'Rails',
           post: 'Hey Marty this coffee sucks, grab Einstein and pick me up! Cloud Culture is a location-based collaboration platform for remote web workers, students and computer coders ...',
           post_status: '2',
           picture_url: "https://cdn3.iconfinder.com/data/icons/back-to-the-future/512/doc-512.png",
           created_at: "6pm",
         },{
           user_id: '88',
           username: 'Einstein',
           firstnamme: 'Miles',
           lat: 32.708910,
           lng:-117.159447,
           tags: 'JS',
           post: 'Bark Bark this coffee sucks, grab some kibble and pick me up! Cloud Culture is a location-based collaboration platform for remote web workers, students and computer coders ...',
           post_status: '2',
           picture_url: "https://cdn3.iconfinder.com/data/icons/back-to-the-future/512/delorean-03-512.png",
           created_at: "7pm",
         },{
           user_id: '88',
           username: 'Marty McFly',
           firstnamme: 'Miles',
           lat: 32.708910,
           lng:-117.159447,
           tags: 'React',
           post: 'Hey Doc this coffee sucks, go grab Einstein and pick me up! Cloud Culture is a location-based collaboration platform for remote web workers, students and computer coders ...',
           post_status: '2',
           picture_url: "https://cdn3.iconfinder.com/data/icons/back-to-the-future/512/marty-mcfly-512.png",
           created_at: "5pm",
         },
         {
           user_id: '88',
           username: 'Doc Brown',
           firstnamme: 'Miles',
           lat: 32.708910,
           lng:-117.159447,
           tags: 'Rails',
           post: 'Hey Marty this coffee sucks, grab Einstein and pick me up! Cloud Culture is a location-based collaboration platform for remote web workers, students and computer coders ...',
           post_status: '2',
           picture_url: "https://cdn3.iconfinder.com/data/icons/back-to-the-future/512/doc-512.png",
           created_at: "6pm",
         },{
           user_id: '88',
           username: 'Einstein',
           firstnamme: 'Miles',
           lat: 32.708910,
           lng:-117.159447,
           tags: 'JS',
           post: 'Bark Bark this coffee sucks, grab some kibble and pick me up! Cloud Culture is a location-based collaboration platform for remote web workers, students and computer coders ...',
           post_status: '2',
           picture_url: "https://cdn3.iconfinder.com/data/icons/back-to-the-future/512/delorean-03-512.png",
           created_at: "7pm",
         }
        ]

    }
  }
  componentDidMount=()=>{
    getLocation().then(ApiLocation => {
    this.setState({ myLocation: ApiLocation })
    })
  }


  render () {

      const {logged_in, sign_in, sign_out, current_user } = this.props

      let { posts, myLocation } = this.state


    return (
        <Switch>

             <Route exact path="/" component={() => <Home posts={posts} myLocation={myLocation}/>} />
             <Route exact path="/about" component= {() => <AboutUs />} />
             <Route exact path="/more" component={() => <LearnMore />} />
             <Route path="/userprofile/:id" component={() => <Profile />} />

             <Route exact path="/feed" render={(props) => <CloudFeed posts={this.state.posts}/> } />

         </Switch>
       );
     }
   }

export default Routes
