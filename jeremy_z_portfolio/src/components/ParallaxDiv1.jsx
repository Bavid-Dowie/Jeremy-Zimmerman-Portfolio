import React, { Component } from 'react'
import './ParallaxDiv1.css'

// $(function () {
//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 50) {
//       $(‘div’).addClass(‘changeColor’)
//     }
//     if ($(this).scrollTop() < 50) {
//       $(‘div’).removeClass(‘changeColor’)
//     }
//   });
// });

export default class ParallaxDiv1 extends Component {
  render() {
    return (
      <div className='parallax1-background' />
    )
  }
}
