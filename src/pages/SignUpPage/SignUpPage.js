import React, { Component } from "react";

export default class SignUpPage extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    passwordRepeat: "",
  };

  onChangePassword = (event) => {
    const currentValue = event.target.value;
    this.setState({
      password: currentValue,
    });
  };

  onChangePasswordRepeat = (event) => {
    const currentValue = event.target.value;
    this.setState({
      passwordRepeat: currentValue,
    });
  };

  render() {
    let disabled = true;
    const { password, passwordRepeat } = this.state;

    if (password && passwordRepeat) {
      disabled = password !== passwordRepeat;
    }
    return (
      <div className="col=lg-6 offset-lg-3 col-md-8 offset-md-2">
        <form className="card mt-5">
          <div className="card-header">
            <h1 className="text-center">Sign Up</h1>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input id="username" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input id="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                onChange={this.onChangePassword}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="passwordRepeat" className="form-label">
                Password Repeat
              </label>
              <input
                type="password"
                id="passwordRepeat"
                className="form-control"
                onChange={this.onChangePasswordRepeat}
              />
            </div>
          </div>
          <button className="btn btn-primary" disabled={disabled}>
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}
