import React, { Component } from 'react'
import './PortfolioProjects.css'

export default class PortfolioProjects extends Component {
  render() {
    return (
      <div className="projects">
        <form id="contact" action="" method="post">
          <h3>Contact Me</h3>
          <br />
          <fieldset>
            <input placeholder="Your Email Address" type="email" tabIndex="2" required />
          </fieldset>
          <fieldset>
            <textarea placeholder="Type your Message Here...." tabIndex="5" required></textarea>
          </fieldset>
          <fieldset>
            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
          </fieldset>
        </form>
      </div>
    )
  }
}
