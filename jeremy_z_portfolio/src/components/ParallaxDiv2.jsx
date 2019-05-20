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
        <img id='skillsa' src='https://github.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/blob/master/noun_Html%20file%20format_374578.png?raw=true' alt='spritehtml' />
        <img id='skillsa' src='https://github.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/blob/master/noun_CSS%20File_237094.png?raw=true' alt='spritecss' />
        <img id='skillsa' src='https://github.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/blob/master/kisspng-ruby-on-rails-the-ruby-programming-language-comput-rirug-w-john-sawers-your-emotional-api-mojotech-5b651b19434131.6405522415333527292755.png?raw=true' alt='spriteruby' />
        <img className='bio-photo' src='https://github.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/blob/master/webdev_profileimg.jpg?raw=true' alt='jeremyz' />
        <img id='skillsb' src='https://github.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/blob/master/githublogo.png?raw=true' alt='spritejs' />
        <img id='skillsb' src='https://github.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/blob/master/kisspng-javascript-node-js-computer-icons-logo-application-prog-nodejs-svg-png-icon-free-download-437-44-5ba3cfbd27d1b0.8756216715374622051631.png?raw=true' alt='spritereact' />
        <img id='skillsb' src='https://github.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/blob/master/kisspng-react-javascript-library-web-development-vue-js-funding-icon-5b51604fee6bc6.4919910515320597279766.png?raw=true' alt='sprites' />
      </div>
      )
    }

}
