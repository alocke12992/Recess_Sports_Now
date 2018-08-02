import React from 'react';

class Login extends React.Component {
  state = {userAttempt: ''}

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault
    const {userAttempt} = this.state
    const {password} = this.props
    if (userAttempt === password) {
      this.props.closeForm()
    } else {
      this.setState({userAttempt: ''})
      return (
        <div class="notification">
          <button class="delete"></button>
          Incorrect password, try again
        </div>
      )
    }
    this.setState({userAttempt: ''})
  }

  render() {
    return (
      <form>
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="password"
              name='userAttempt'
              placeholder="Password"
              value={this.state.userAttempt}
              onChange={this.handleChange}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button onClick={this.handleSubmit} className="button is-success">
              Login
            </button>
          </p>
        </div>
      </form>
    )
  }
}

export default Login