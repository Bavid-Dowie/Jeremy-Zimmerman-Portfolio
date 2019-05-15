import React, { Component } from 'react'
import { AwesomeButtonSocial } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss'
import './Footer.css'

function ButtonFB() {
  return (
    <AwesomeButtonSocial
      cssModule={AwesomeButtonStyles}
      type="facebook"
      url="https://www.facebook.com/jeremy.zimmerman.754"
    />
  );
}

function ButtonIG() {
  return (
    <AwesomeButtonSocial
      cssModule={AwesomeButtonStyles}
      type="instagram"
      url="https://www.instagram.com/jeremyzimmermanmusic/"
    />
  );
}

function ButtonGH() {
  return (
    <AwesomeButtonSocial
      cssModule={AwesomeButtonStyles}
      type="github"
      url="https://www.https://github.com/Bavid-Dowie.com/jeremyzimmermanmusic/"
    />
  );
}

export default class Footer extends Component {
  render() {
    return (
      <div className='footer__style'>
      <br/>
        This is the footer.
      <br/>
      <br/>
      <ButtonGH />
      <ButtonFB />
      <ButtonIG />
      <br/>
      <br/>
      </div>
    )
  }
}
