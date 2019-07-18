import React from "react"
import PropTypes from "prop-types"
import { Switch, Route } from 'react-router-dom'
import { Nav, NavItem, NavLink} from 'reactstrap'


////routes
import Home from './home'
import CloudFeed from './feed'
import CloudPost from './post'
import AboutUs from './aboutus'
import Profile from './profile'
import LearnMore from './learnmore'
import Landing from './landing'
import NewTag from './newtag'

/////fetches
import{ getLocation } from './API'
import { getPosts } from '../api/index.js'
import {getCloseUsers} from './API'



class Routes extends React.Component {

    constructor(props) {
        super(props)
            this.state = {
              postsFilter:[],
              myLocation: [],
              posts: []
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
      let { posts, myLocation} = this.state
      let { statusFilter } = this


    return (
        <Switch>

             <Route exact path="/"
             component={() => <Landing
                 logged_in={logged_in}
                 sign_in = {sign_in}
                 sign_out = {sign_out}/>} />

             <Route exact path="/map"
                component={() => <Home
                 statusFilter={statusFilter}
                 posts={posts}
                 myLocation={myLocation}
                 getCloseUsers ={getCloseUsers}
                 current_user={current_user}
                 logged_in={logged_in}
                 sign_in = {sign_in}
                 sign_out = {sign_out}/>} />

             <Route exact path="/createtag" component= {() => <NewTag />} />

             <Route exact path="/about" component= {() => <AboutUs />} />
             <Route exact path="/more" component={() => <LearnMore />} />
             <Route exact path="/userprofile/:id" component={(props) => <Profile
                {...props}
                users = {users}
                current_user = {current_user}
                edit_user = {edit_user}
                posts = {posts}/>} />
             <Route exact path="/feed" component={() => <CloudFeed
               posts={posts}
               logged_in={logged_in}
               current_user = {current_user}/> } />

             <Route exact path="/post" component={() => <CloudPost handleNewPost={this.handleNewPost}/> } />

         </Switch>
       )
     }
   }

export default Routes
