import React, { Component } from 'react'
import './Projects.css'

document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', stickyNav);
  window.onscroll = function () { stickyNav() }

  const header = document.getElementById('projects_jump')
  const sticky = header.offsetTop;

  function stickyNav() {
    if (window.pageYOffset > sticky) {
      header.classList.remove('sticky')
    } else {
      header.classList.remove('sticky')
    }
  }
})
class Projects extends Component {
  render() {
    return (
      <div
        className='projects__body'
        id='projects_jump'>
        <title>Jeremy Zimmerman - A Profile</title>
        <hr />
        <h1 className='main-header'>Stuff I Made</h1>
        <hr />
        <div className='projects'>
          <div
            id='col'
            className='project1'>
            <a href='http://webplayer-lite.surge.sh/main'>
              <img src='https://github.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/blob/master/Screen%20Shot%202019-05-20%20at%202.44.02%20AM.png?raw=true' alt='webplayer' />
            </a>
            <p className='appText'>
              webPlayerLite - HTML, CSS, React.js, SoundCloud API <br /><br />An audio-media aggregator, which accesses the SoundCloud API to search for audio files by any keyword in order to populate audio players for users to be able to listen to their desired music selection.  <br />
            </p>
          </div>
          <div id='col' className='project2'>
            <a href='http://uxwdi-sushizo.surge.sh/'><img src='https://github.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/blob/master/Screen%20Shot%202019-05-20%20at%202.04.37%20AM.png?raw=true' alt='Sushi Zo' />
            </a>
            <p className='appText'>
              Sushi Zo - HTML, CSS, React.js <br /><br />An upgraded website built in collaboration with a team of UX/UI designers in order to create an visually pleasing and easily navigable single page site for a local restaurant.  <br />
            </p>
          </div>
          <div id='col' className='project3'>
            <a href='https://iterator.surge.sh/'><img src='https://raw.githubusercontent.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/master/Screen%20Shot%202019-05-20%20at%202.05.11%20AM.png' alt='Iterator' /></a>
            <p className='appText'>
              iterator - HTML, CSS, React.js, Express, Sequelize <br /><br />A coding ideas and solutions platform focused on letting developers share ideas and solutions in order to tackle the most difficult challenges faced in today's world.  <br />
            </p>
          </div>
          <div id='col' className='project4'>
            <a href='http://loopit.surge.sh/login'><img src='https://raw.githubusercontent.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/master/Screen%20Shot%202019-05-20%20at%202.20.44%20AM.png' alt='LoopIt' /></a>
            <p className='appText4'>
              LoopIt - HTML, CSS, React.js on Rails, Postgresql <br /><br />A fullstack application allowing users to create their own customized drumpad and loopstation. Users will ultimately be able to record their own short audio samples and create audio loops with their own custom drumpad.  <br />
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects