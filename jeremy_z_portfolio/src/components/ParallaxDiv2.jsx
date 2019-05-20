import React, { Component } from 'react'
import './ParallaxDiv2.css'

// const parallax = document.getElementsByClassName('')
// componentDidMount() {
//   window.addEventListener('scroll', function () {
//     let offset = window.pageYOffset
// ParallaxDiv2.style.backgroundPositionY = offset * 0.7 + 'px'
//   })
// }

export default class ParallaxDiv2 extends Component {


  render() {
    return (
      <div className='parallax2-background'>
        <img className='bio-photo' src='https://github.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/blob/master/webdev_profileimg.jpg?raw=true' alt='jeremyz' />
      </div>
      )
    }

}
