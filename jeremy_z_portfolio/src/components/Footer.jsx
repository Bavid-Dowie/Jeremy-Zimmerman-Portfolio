import React, { Component } from 'react'
import { AwesomeButtonSocial } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss'
import './Footer.css'

function ButtonFB() {
  return (
    <AwesomeButtonSocial
      cssModule={AwesomeButtonStyles}
      type='facebook'
      url='https://www.facebook.com/jeremy.zimmerman.754'
    />
  );
}

function ButtonIG() {
  return (
    <AwesomeButtonSocial
      cssModule={AwesomeButtonStyles}
      type='instagram'
      url='https://www.instagram.com/jeremyzimmermanmusic/'
    />
  );
}

function ButtonGH() {
  return (
    <AwesomeButtonSocial
      cssModule={AwesomeButtonStyles}
      type='github'
      url='https://www.https://github.com/Bavid-Dowie.com/jeremyzimmermanmusic/'
    />
  );
}

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <footer>
          <div class='footerLinks'>
            <ul>
              <li><a href='https://www.linkedin.com/in/jeremy-zimmerman-dev/'>LinkedIn</a></li>
              <li><a href='https://codepen.io/jtzimmerman/'>CodePen</a></li>
              <li><a href='https://github.com/Bavid-Dowie.com/jeremyzimmermanmusic/'>GitHub</a></li>
              <li><a href='jtzimmerm@gmail.com'>Contact Me</a></li>
            </ul>
          </div>
          <div class='copyright'>
            <p>Copyright 2019</p>
          </div>
        </footer>
      </div>
    )
  }
}
