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
        </div>
        <img id='skills_png'
          src='https://github.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/blob/master/noun_Html%20file%20format_374578.png?raw=true'
          alt='spritehtml' />
        <img id='skills_png'
          src='https://github.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/blob/master/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e5e7537.0464945815246930703869.png?raw=true' alt='spritenodejs' />
        <img id='skills_png'
          src='https://github.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/blob/master/noun_CSS%20File_237094.png?raw=true'
          alt='spritecss' />
        <img id='skills_png'
          src='https://github.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/blob/master/kisspng-postgresql-object-relational-database-oracle-datab-portfolio-whitebolt-whitebolt-5b65f8219026e9.0825897615334093135905.png?raw=true'
          alt='spritepostgresql' />
        <img id='skills_png'
          src='https://github.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/blob/master/kisspng-ruby-on-rails-the-ruby-programming-language-comput-rirug-w-john-sawers-your-emotional-api-mojotech-5b651b19434131.6405522415333527292755.png?raw=true'
          alt='spriteruby' />
        <img id='skills_png'
          src='https://github.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/blob/master/githublogo.png?raw=true'
          alt='spritegithub' />
        <img id='skills_png'
          src='https://github.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/blob/master/kisspng-javascript-node-js-computer-icons-logo-application-prog-nodejs-svg-png-icon-free-download-437-44-5ba3cfbd27d1b0.8756216715374622051631.png?raw=true'
          alt='spritejs' />
        <img id='skills_png'
          src='https://github.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/blob/master/kisspng-ruby-on-rails-web-framework-web-development-web-ap-5aef1bd72221e3.2147797415256196711398.png?raw=true' alt='spriterails' />
        <img id='skills_png'
          src='https://github.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/blob/master/kisspng-react-javascript-library-web-development-vue-js-funding-icon-5b51604fee6bc6.4919910515320597279766.png?raw=true'
          alt='spritereact' />
        <img id='skills_png'
          src='https://github.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/blob/master/iconfinder_mysql-2048-black_167700.png?raw=true '
          alt='spritemysql' />
        <div className='bio-div'>
          <img className='bio-photo'
            src='https://github.com/Bavid-Dowie/Jeremy-Zimmerman-Portfolio/blob/master/webdev_profileimg.jpg?raw=true'
            alt='jeremyz' />
        </div>
      </div>
    )
  }

}
