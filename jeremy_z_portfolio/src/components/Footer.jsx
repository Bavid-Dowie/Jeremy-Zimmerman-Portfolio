import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <footer>
          <div className='footerLinks'>
            <ul>
              <li><a href='https://www.linkedin.com/in/jeremy-zimmerman-dev/'>-LinkedIn-</a></li>
              <li><a href='https://codepen.io/jtzimmerman/'>CodePen-</a></li>
              <li><a href='https://github.com/Bavid-Dowie.com/jeremyzimmermanmusic/'>GitHub-</a></li>
            </ul>
          </div>
          <div className='copyright'>
            <p>Copyright 2019</p>
          </div>
        </footer>
      </div>
    )
  }
}
