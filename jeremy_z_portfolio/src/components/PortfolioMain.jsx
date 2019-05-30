import React, { Component } from 'react'
import './PortfolioMain.css'

document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', stickyNav);
  window.onscroll = function () { stickyNav() }

  const header = document.getElementById('portfolio_jump1')
  const sticky = header.offsetTop;

  function stickyNav() {
    if (window.pageYOffset > sticky) {
      header.classList.remove('sticky')
    } else {
      header.classList.remove('sticky')
    }
  }
})
class PortfolioMain extends Component {
  render() {
    return (
      <div className='portfolio__body' id='portfolio_jump1'>
        <title>Jeremy Zimmerman - A Profile</title>
        <h1 className='main-header'>I Make Web Apps</h1>
        <hr />
        <div className='projects'>
          <div id='col' className='project4'>
            <a href='http://webplayer-lite.surge.sh/main'><img src='https://github.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/blob/master/Screen%20Shot%202019-05-20%20at%202.44.02%20AM.png?raw=true' alt='webplayer' /></a>
          <p className='webPlayerText'>
            webPlayerLite is an audio-media aggregator, which accesses the SoundCloud API to search for audio files by any keyword in order to populate the audio players on the app's main page. <br />
          </p>
          </div>
          <div id='col' className='project1'>
            <a href='http://uxwdi-sushizo.surge.sh/'><img src='https://github.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/blob/master/Screen%20Shot%202019-05-20%20at%202.04.37%20AM.png?raw=true' alt='Sushi Zo' />
            </a>
          </div>
          <div id='col' className='project3'>
            <a href='https://iterator.surge.sh/'><img src='https://raw.githubusercontent.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/master/Screen%20Shot%202019-05-20%20at%202.05.11%20AM.png' alt='Iterator' /></a>
          </div>
          <div id='col' className='project4'>
            <a href='http://loopit.surge.sh/login'><img src='https://raw.githubusercontent.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/master/Screen%20Shot%202019-05-20%20at%202.20.44%20AM.png' alt='LoopIt' /></a>
          </div>
        </div>
      </div>
    )
  }
}

export default PortfolioMain