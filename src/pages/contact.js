import React from 'react';
import ContactForm from '../components/ContactForm';
class Contact extends React.Component {
  render() {
    return (
      <div className="columns" style={{marginTop: '100px'}}>
        <div className="column is-8 is-offset-2">
          <h1>Contact</h1>
          <p>
            For inquires, opportunities, advertising, or how to be a contributor to Recess Sports Now,<br />please write to: <a href="mailto:recesssportsnow@gmail.com">recesssportsnow@gmail.com</a>
          </p>
        </div>
      </div>
    )
  }

}

export default Contact