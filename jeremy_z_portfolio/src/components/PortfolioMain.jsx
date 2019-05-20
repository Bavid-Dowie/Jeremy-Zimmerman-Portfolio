import React, { Component } from 'react'
import './PortfolioMain.css'

document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', stickyNav);
  window.onscroll = function () { stickyNav() }

  const header = document.getElementById('portfolio_jump1')
  const sticky = header.offsetTop;

  function stickyNav() {
    if (window.pageYOffset > sticky) {
      header.classList.remove('sticky')
    } else {
      header.classList.remove('sticky')
    }
  }
})
class PortfolioMain extends Component {
  render() {
    return (
      <div className='portfolio__body' id='portfolio_jump1'>
        <h1>Jeremy Zimmerman - A Profile</h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam rem sequi ut, deserunt atque voluptas, sunt accusamus enim quasi cupiditate iusto! Voluptatum, magni quasi modi tenetur perferendis nam quaerat obcaecati.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, deserunt atque voluptas.
      </div>
    )
  }
}

export default PortfolioMain