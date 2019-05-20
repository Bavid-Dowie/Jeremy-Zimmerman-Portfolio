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
      <div id='header__body' className='glitch header'>
        <div id='header__title1' className='back'>Jeremy</div>
        <br />
        <div id='header__title2' className='middle'
          data-hover='breaks'>
        makes
        </div>
        <br/>
        <div id='header__title3' className='front'>stuff</div>
        <div id='header__split1'></div>
        <div id='header__split2'></div>
        <a href='#portfolio_jump1'><div className='indicator'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div></a>
      </div>
    )
  }
}

export default Header

// import React, { Component } from 'react'
// import './Header.css'

// class Header extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       hovering: false
//     }
//   }

//   render() {
//     const style = {
//       color: this.state.hovering ? 'red' : 'blue'
//     }
//     const handleMouseEnter = () => this.setState({ hovering: true })
//     const handleMouseLeave = () => this.setState({ hovering: false })
//     return (
//       <div id='header__body' className='glitch__header'>
//         <h1 id='header__title1' className="back">Jeremy</h1>
//         <br />
//         <div
//           style={style}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <h1 id='header__title2' className="middle">
//             <span className='makes'>makes</span>
//             <span className='breaks'>breaks</span>
//           </h1>
//         </div>
//         <br />
//         <h1 id='header__title3' className="front">stuff</h1>
//         <div id="header__split1"></div>
//         <div id="header__split2"></div>
//       </div>
//     )
//   }
// }

// export default Header
