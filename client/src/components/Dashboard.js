import React, {Component} from 'react'
import demo1 from '../assets/demo.jpg'
import demo2 from '../assets/demo2.jpg'
import demo3 from '../assets/demo3.jpg'
import demo4 from '../assets/demo4.jpg'
import demo5 from '../assets/demo5.jpg'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart, faTimes)


class Dashboard extends Component{


cardSwipeLeft(){
  alert('Sorry, no more people in your area!')
}

cardSwipeRight(){
  alert('Sorry, no more people in your area!')
}


  render(){
  return(
    <div>
    <div className="tinder-wrapper">
        <div className="tinder-card">
          <img src={demo5} alt="profile-photo"/>
          <h3>Demo card</h3>
          <p>This is a demo for bio section</p>
          <br/>
          <p>Click the buttons below to see more examples!</p>
        </div>
        </div>
        <div className="tinder-buttons">
        <button className="button no" onClick={()=>{this.cardSwipeLeft()}}><FontAwesomeIcon icon="times" className="icon" /></button>
        <button className="button yes" onClick={()=>{this.cardSwipeRight()}}><FontAwesomeIcon icon="heart" className="icon" /></button>
      </div>
    </div>
    )
  }
}

export default Dashboard
