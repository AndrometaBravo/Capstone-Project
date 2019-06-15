import React from "react"
import PropTypes from "prop-types"
import { Nav, NavItem, NavLink} from 'reactstrap'
import { Switch, Route } from 'react-router-dom'

// routes
import Home from './home'
import AboutUs from './aboutus'
import LearnMore from './learnmore'


class Routes extends React.Component {
  render () {
      const {logged_in, sign_in, sign_out, current_user } = this.props
    return (
        <Switch>
             <Route path="/" exact component= {() => <Home />} />
             <Route path="/about" component= {() => <AboutUs />} />
             <Route path="/more" component={() => <LearnMore />} />
         </Switch>
       );
     }
   }
export default Routes
