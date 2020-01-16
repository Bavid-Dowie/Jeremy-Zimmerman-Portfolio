import React, { Component } from 'react'
import './ContactMe.css'

export default class ContactMe extends Component {
  render() {
    return (
      <div className='contact-me'>
        <form
          id='contact'
          className='container'
          action='https://formspree.io/jtzimmerm@gmail.com'
          method='POST'
        >
          <h1>Contact Me</h1>
          <br />
          <h6>Name</h6>
          <input
            type='text'
            name='name'
            // placeholder='Your Name'
          />
          <h6>Email</h6>
          <input
            type='email'
            name='_replyto'
            // placeholder='Your Email'
          />
          <h6>Message</h6>
          <textarea
            name='comments'
            // placeholder='Type your message right here, and send it into the void!'
          />
          <input
            id='submit-button'
            type='submit'
            value='Contact Me'
          />
        </form>
      </div>
    )
  }
}

// import React, { Component } from 'react';
// import axios from 'axios';
// import './ContactMe.css';

// class ContactMe extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { name: '', surname: '', email: '', message: '' };
//   }

//   handleForm = e => {
//     axios
//       .post('https://formcarry.com/s/yourFormId', this.state, {
//         headers: { Accept: 'application/json' }
//       })
//       .then(function(response) {
//         console.log(response);
//       })
//       .catch(function(error) {
//         console.log(error);
//       });

//     e.preventDefault();
//   };

//   handleFields = e => this.setState({ [e.target.name]: e.target.value });

//   render() {
//     return (
//       <form onSubmit={this.handleForm}>
//         <label htmlFor='name'>Name</label>
//         <input type='text' id='name' name='name' onChange={this.handleFields} />

//         <label htmlFor='surname'>Surname</label>
//         <input
//           type='text'
//           id='surname'
//           name='surname'
//           onChange={this.handleFields}
//         />

//         <label htmlFor='email'>Email</label>
//         <input
//           type='email'
//           id='email'
//           name='email'
//           onChange={this.handleFields}
//         />

//         <label htmlFor='message'>Your Message</label>
//         <textarea
//           name='message'
//           id='message'
//           onChange={this.handleFields}
//         ></textarea>

//         <button type='submit'>Send</button>
//       </form>
//     );
//   }
// }

// export default ContactMe;
