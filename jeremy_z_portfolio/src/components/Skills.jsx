import React, { Component } from 'react'
import './Skills.css'

// const parallax = document.getElementsByClassName('')
// componentDidMount() {
//   window.addEventListener('scroll', function () {
//     let offset = window.pageYOffset
// Skills.style.backgroundPositionY = offset * 0.7 + 'px'
//   })
// }

export default class Skills extends Component {


  render() {
    return (
      <div className='skills-background' id='skills_jump'>
        <div className="layer">
          <div className='bio-div'>
            <img className='bio-photo'
              src='https://github.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/blob/master/webdev_profileimg.jpg?raw=true'
              alt='jeremyz' />
            <img id='skills_png'
              src='https://github.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/blob/master/Html-logo-bw.png?raw=true'
              alt='spritehtml' />
            <img id='skills_png'
              src='https://github.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/blob/master/jeremy_z_portfolio/nodejs-logo.png?raw=true' alt='spritenodejs' />
            <img id='skills_png'
              src='https://github.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/blob/master/CSS-logo-bw.png?raw=true'
              alt='spritecss' />
            <img id='skills_png'
              src='https://github.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/blob/master/postgresql-logo.png?raw=true'
              alt='spritepostgresql' />
            <img id='skills_png'
              src='https://github.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/blob/master/ruby-logo.png?raw=true'
              alt='spriteruby' />
            <img id='skills_png'
              src='https://github.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/blob/master/githublogo.png?raw=true'
              alt='spritegithub' />
            <img id='skills_png'
              src='https://github.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/blob/master/jeremy_z_portfolio/javascript-logo.png?raw=true'
              alt='spritejs' />
            <img id='skills_png'
              src='https://github.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/blob/master/ruby-on-railslogo.png?raw=true' alt='spriterails' />
            <img id='skills_png'
              src='https://github.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/blob/master/react-javascript-logo.png?raw=true'
              alt='spritereact' />
            <img id='skills_png'
              src='https://github.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/blob/master/iconfinder_mysql-2048-black_167700.png?raw=true'
              alt='spritemysql' />
          </div>
        </div>
      </div>
    )
  }

}
