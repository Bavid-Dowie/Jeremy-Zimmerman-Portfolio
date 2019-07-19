import React, { Component } from "react";
import "./ContactMe.css";

export default class ContactMe extends Component {
  render() {
    return (
      <div className="contact-me">
        <form
          id="contact"
          className="container"
          action="https://formspree.io/jtzimmerm@gmail.com"
          method="POST"
        >
          <h1>Contact Me</h1>
          <br />
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="_replyto" placeholder="Your Email" />
          <textarea
            name="comments"
            placeholder="Type your message right here, and send it into the void!"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
