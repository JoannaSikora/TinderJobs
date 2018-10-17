import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Header extends Component {
    renderContent(){
      switch(this.props.auth) {
        case null:
          return;
        case false:
          return (
            <li className="nav-link">
            <a href="/auth/google">
            Login With Google
            </a>
            </li>
          );
        default:
          return (
            <div>
            <li className="nav-link "><Link to='/profile'>
            Profile
            </Link></li>
            <li className="nav-link"><a href="/api/logout">
            Logout
            </a></li>
            </div>
          );
      }
    }

  render(){
    // console.log(this.props);
    return(
      <nav>
        <div className="nav-wrapper">
          <Link
          to={this.props.auth ? '/dashboard': '/'}
          className="brand-logo nav-logo"
          >
          TinderJobs</Link>
            <ul id="nav-mobile" className="right">
              {this.renderContent()}
    </ul>
  </div>
</nav>
    )
  }
}


function mapStateToProps({auth}){
  return {auth}
}


export default connect(mapStateToProps)(Header)
