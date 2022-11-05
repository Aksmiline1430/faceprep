import React, { Component } from 'react'


export default class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  } 

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});     
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  handleClick = (e) => {
    var email = document.getElementById("email_field").value;
    var password = document.getElementById("password_field").value;
    if(email == "admin@galaxyweblinks.in" && password == "admin1234")
    {
      window.location.replace("/success")
    }
    else
    {
      alert("Invalid User")
    }

  }

 

  render() {
    return (
      <form>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input name="email"
            type="email"
            id="email_field"
            // className="form-control"
            className={`form-control ${this.errorClass(this.state.formErrors.email)}`}
            placeholder="Enter email"
            onChange={this.handleUserInput} 
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input name="password"
            type="password"
            id="password_field"
            className={`form-control ${this.errorClass(this.state.formErrors.password)}`}
            placeholder="Enter password"
            onChange={this.handleUserInput} 
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="button" onClick={this.handleClick} className="btn btn-primary" disabled={!this.state.formValid}>
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    )
  }
}
