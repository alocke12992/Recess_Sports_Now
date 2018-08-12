import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp'

class ContactForm extends React.Component {
  state = {firstName: '', lastName: '', email: ''}

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {firstName, lastName, email} = this.state
    console.log(firstName, lastName, email)
    addToMailchimp(email, {
      FNAME: firstName,
      LNMAE: lastName
    })
      .then(data => {
        // I recommend setting data to React state
        // but you can do whatever you want
        console.log(data)
      })
      .catch(() => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
        // see below for how to handle errors
      })
  }

  render() {
    const {firstName, lastName, email} = this.state
    return (
      <form className="contactForm">
        <input
          className="input"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={firstName}
          onChange={this.handleChange}
        />
        <input
          className="input"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={lastName}
          onChange={this.handleChange}
        />
        <input
          className="input"
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <div className="control">
          <button className="button is-primary" onClick={this.handleSubmit}>Submit</button>
        </div>
      </form>

    )
  }
}

export default ContactForm
