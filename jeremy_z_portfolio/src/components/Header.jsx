import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div
        id='header__body'
        className='glitch'>
        <a href='#skills_jump'>
          <div
            id='header__title1'
            className='back'>
            Jeremy
          </div>
        </a>
        <br />
        <div
          id='header__title2'
          className='middle'
          data-hover='breaks'>
          makes
        </div>
        <br/>
        <a href='#projects_jump'>
          <div
            id='header__title3'
            className='front'>
            stuff
          </div>
        </a>
        <div id='header__split1'></div>
        <div id='header__split2'></div>
        <a href='#aboutme_jump'>
          <div className='indicator'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </a>
      </div>
    )
  }
}

export default Header