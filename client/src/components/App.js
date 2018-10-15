import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../actions'



import '../App.css';
import Header from './Header'
import Landing from './Landing'
const Dashboard = () => <h2>Dashboard</h2>
const Profile = () => <h2>Profile</h2>
const ProfileEdit = () => <h2>Profile editing mode onn</h2>

class App extends Component {
  componentDidMount(){
    this.props.fetchUser()
  }

  render(){
    return (
    <div className="container">
      <BrowserRouter>
        <div>
        <Header/>
          <Route exact path="/" component={Landing}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route exact path="/profile" component={Profile}/>
          <Route path="/profile/edit" component={ProfileEdit}/>
        </div>
      </BrowserRouter>
    </div>
    )
  }
}

export default connect(null, actions)(App);
