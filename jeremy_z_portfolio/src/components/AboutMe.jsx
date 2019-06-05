import React, { Component } from 'react'
import './AboutMe.css'

export default class AboutMe extends Component {
  render() {
    return (
      <div
      id='aboutme_jump'
      className='about-me'>
      <nav>
        <ul>
          <li><a className='resume' href='https://www.docdroid.net/gchPI7Z/jeremy-zimmerman-resume.pdf'>Resume</a></li>
          <li><a className='linkedin' href='https://www.linkedin.com/in/jeremy-zimmerman-dev/'>LinkedIn</a></li>
          <li><a className='github' href='https://github.com/Bavid-Dowie'>GitHub</a></li>
        </ul>
      </nav>
        <h1 className='about-me-blurb'>As a full-stack developer and musician currently based in NYC, I thrive and excel in creative environments.
        <br />
        <br />
        As a lifelong traveler, endlessly wandering across longitudes and latitudes, I have a deep-seeded desire to help bring people together.
        <br />
        <br />
        As a dreamer I believe the future exists for everyone. Through creativity, care, and collaboration, the future belongs to us all.
        </h1>
      </div>
    )
  }
}
