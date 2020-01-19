import React, { Component } from 'react'
import './Projects.css'

class Projects extends Component {
  render() {
    return (
      <div className="projects__body" id="projects_jump">
        <title>Jeremy Zimmerman - A Profile</title>
        <hr />
        <h1 className="main-header">Projects and Stuff</h1>
        <hr />
        <div className="projects">
          <div id="col" className="project1">
            <h5>SoundCloud Music Aggregator</h5>
            <a href="http://webplayer-lite.surge.sh/main">
              <img
                src="https://github.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/blob/56bc90b1d3f435bf9bd71e10cbd68e7ab5bf3ab1/sc-player-screenshot.png?raw=true"
                alt="webplayer"
              />
            </a>
            <p className="appText">
              An audio-media aggregator, which accesses the SoundCloud API to
              search for audio files by any keyword in order to populate audio
              players for users to be able to listen to their desired music
              selection.
              <p id="tech-list">HTML, CSS, React.js, SoundCloud API</p>
            </p>
          </div>
          <div id="col" className="project2">
            <h5>Sushi Zo</h5>
            <a href="http://uxwdi-sushizo.surge.sh/">
              <img
                src="https://github.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/blob/56bc90b1d3f435bf9bd71e10cbd68e7ab5bf3ab1/sushi-zo-screenshot.png?raw=true"
                alt="Sushi Zo"
              />
            </a>
            <p className="appText">
              An upgraded website built in collaboration with a team of UX/UI
              designers in order to create an visually pleasing and easily
              navigable single page site for a local restaurant.
              <p id="tech-list">HTML, CSS, React.js</p>
            </p>
          </div>
          <div id="col" className="project3">
            <h5>iterator</h5>
            <a href="https://iterator.surge.sh/">
              <img
                src="https://github.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/blob/56bc90b1d3f435bf9bd71e10cbd68e7ab5bf3ab1/iterator-screenshot.png?raw=true"
                alt="Iterator"
              />
            </a>
            <p className="appText">
              A coding ideas and solutions platform focused on letting
              developers share ideas and solutions in order to tackle the most
              difficult challenges faced in today's world.
              <p id="tech-list">HTML, CSS, React.js, Express, Sequelize</p>
            </p>
          </div>
          <div id="col" className="project4">
            <h5>LoopIt</h5>
            <a href="http://loopit.surge.sh/login">
              <img
                src="https://github.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/blob/master/jeremy_z_portfolio/loopit-screenshot.png?raw=true"
                alt="LoopIt"
              />
            </a>
            <p className="appText">
              A fullstack application allowing users to create their own
              customized drumpad and loopstation. Users will ultimately be able
              to record their own short audio samples and create audio loops
              with their own custom drumpad.
              <p id="tech-list">HTML, CSS, React.js on Rails, Postgresql</p>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects