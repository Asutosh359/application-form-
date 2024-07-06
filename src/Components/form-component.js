import React from 'react';

class FormComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      emailAddress: '',
      country: '',
      city: '',
      panNumber: '',
      aadharNumber: '',
      password: '',
      passwordConfirmation: '',
      firstNameError: '',
      emailAddressError: '',
      passwordError: '',
      passwordConfirmationError: '',
      countryError: '',
      cityError: '',
      panNumberError: '',
      aadharNumberError: '',
      isFormSubmitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateFirstName = this.validateFirstName.bind(this);
    this.validateLastName = this.validateLastName.bind(this);
    this.validateEmailAddress = this.validateEmailAddress.bind(this);
    this.validatecountry = this.validatecountry.bind(this);
    this.validatecity = this.validatecity.bind(this);
    this.validatepanNumber = this.validatepanNumber.bind(this);
    this.validateaadharNumber = this.validateaadharNumber.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validatePasswordConfirmation = this.validatePasswordConfirmation.bind(this);
    this.validateField = this.validateField.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });

    return;
  }

  handleBlur(event) {
    const { name } = event.target;

    this.validateField(name);
    return;
  }

  handleSubmit(event) {
    event.preventDefault();
    let formFields = [
      'firstName',
      'lastName',
      'emailAddress',
      'country',
      'city',
      'panNumber',
      'aadharNumber',
      'password',
      'passwordConfirmation'
    ];
    let isValid = true;
    formFields.forEach((field) => {
      isValid = this.validateField(field) && isValid;
    });

    if (isValid) this.setState({ isFormSubmitted: true });
    else this.setState({ isFormSubmitted: false });

    return this.state.isFormSubmitted;
  }

  validateField(name) {
    let isValid = false;

    if (name === 'firstName') isValid = this.validateFirstName();
    else if (name === 'lastName') isValid = this.validateLastName();
    else if (name === 'emailAddress') isValid = this.validateEmailAddress();
    else if (name === 'country') isValid = this.validatecountry();
    else if (name === 'city') isValid = this.validatecity();
    else if (name === 'panNumber') isValid = this.validatepanNumber();
    else if (name === 'aadharNumber') isValid = this.validateaadharNumber();
    else if (name === 'password') isValid = this.validatePassword();
    else if (name === 'passwordConfirmation') isValid = this.validatePasswordConfirmation();
    return isValid;
  }

  validateFirstName() {
    let firstNameError = '';
    const value = this.state.firstName;
    if (value.trim() === '') firstNameError = 'First Name is required';

    this.setState({
      firstNameError
    });
    return firstNameError === '';
  }

  validateLastName() {
    let lastNameError = '';
    const value = this.state.lastName;
    if (value.trim() === '') lastNameError = 'Last Name is required';
    this.setState({
      lastNameError
    });
    return lastNameError === '';
  }

  validateEmailAddress() {
    let emailAddressError = '';
    const value = this.state.emailAddress;
    if (value.trim === '') emailAddressError = 'Email Address is required';
    else if (!emailValidator.test(value)) emailAddressError = 'Email is not valid';
    this.setState({
      emailAddressError
    });
    return emailAddressError === '';
  }

  validatecountry() {
    let countryError = '';
    const value = this.state.country;
    if (value.trim === '') countryError = 'Country is required';
    this.setState({
      countryError
    });
    return countryError === '';
  }

  validatecity() {
    let cityError = '';
    const value = this.state.city;
    if (value.trim === '') city = 'City is required';
    this.setState({
      cityError
    });
    return cityError === '';
  }

  validatepanNumber() {
    let panNumberError = '';
    const value = this.state.panNumber;
    if (value.trim === '') panNumberError = 'Pan Number is required';
    else if (!panNumberValidator.test(value)) panNumberError = 'Invalid PAN Number!';
    this.setState({
      panNumberError
    });
    return panNumberError === '';
  }

  validateaadharNumber() {
    let aadharNumberError = '';
    const value = this.state.aadharNumber;
    if (value.trim === '') aadharNumberError = 'Aadhar Number is required';
    else if (!aadharNumberValidator.test(value)) aadharNumberValidator = 'Invalid Aadhar Number';
    this.setState({
      aadharNumberError
    });
    return aadharNumberError === '';
  }

  validatePassword() {
    let passwordError = '';
    const value = this.state.password;
    if (value.trim === '') passwordError = 'Password is required';
    else if (!passwordValidator.test(value)) passwordError = 'Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!';
    this.setState({
      passwordError
    });
    return passwordError === '';
  }

  validatePasswordConfirmation() {
    let passwordConfirmationError = '';
    if (this.state.password !== this.state.passwordConfirmation)
      passwordConfirmationError = 'Password does not match Confirmation';

    this.setState({
      passwordConfirmationError
    });
    return passwordConfirmationError === '';
  }

  render() {
    return (
      <div className="main">
        <h3>SignUp Form</h3>
        {this.state.isFormSubmitted ? (
          <div className="details">
            <h3>Thanks for signing up, find your details below:</h3>
            <div>First Name: {this.state.firstName}</div>
            <div>Last Name: {this.state.lastName}</div>
            <div>Email Address: {this.state.emailAddress}</div>
            <div>Country: {this.state.country}</div>
            <div>City: {this.state.city}</div>
            <div>Pan Number: {this.state.panNumber}</div>
            <div>Aadhar Number: {this.state.aadharNumber}</div>
          </div>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.firstNameError && (
                <div className="errorMsg">{this.state.firstNameError}</div>
              )}
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.lastNameError && (
                <div className="errorMsg">{this.state.lastNameError}</div>
              )}
              <input
                type="email"
                placeholder="Email"
                name="emailAddress"
                value={this.state.emailAddress}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.emailAddressError && (
                <div className="errorMsg">{this.state.emailAddressError}</div>
              )}
              <input
                type="text"
                placeholder="Country"
                name="country"
                value={this.state.country}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.countryError && (
                <div className="errorMsg">{this.state.countryError}</div>
              )}
              <input
                type="text"
                placeholder="City"
                name="city"
                value={this.state.city}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.cityError && (
                <div className="errorMsg">{this.state.cityError}</div>
              )}
              <input
                type="text"
                placeholder="Pan Number"
                name="panNumber"
                value={this.state.panNumber}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.panNumberError && (
                <div className="errorMsg">{this.state.panNumberError}</div>
              )}
              <input
                type="text"
                placeholder="Aadhar Number"
                name="aadharNumber"
                value={this.state.aadharNumber}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.aadharNumberError && (
                <div className="errorMsg">{this.state.aadharNumberError}</div>
              )}
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.passwordError && (
                <div className="errorMsg">{this.state.passwordError}</div>
              )}
              <input
                type="password"
                placeholder="Confirm Password"
                name="passwordConfirmation"
                value={this.state.passwordConfirmation}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.passwordConfirmationError && (
                <div className="errorMsg">
                  {this.state.passwordConfirmationError}
                </div>
              )}
              <button type="submit">Sign Up</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default FormComponent;

const emailValidator = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
const passwordValidator = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const panNumberValidator = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;
const aadharNumberValidator = /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/;
