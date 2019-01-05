import React, { Component } from "react";
import { loginUser } from '../actions/loginActions';
import { connect } from 'react-redux';

class Login extends Component {
  
   state = {
      email: "",
      password: ""
    };
  
  onChangeHandler = event => {
    this.setState({ [event.target.id]: event.target.value });
   
  };
  onButtonSubmit = () => {
      const data = {
          email: this.state.email,
          password: this.state.password
      }
      this.props.loginUser(data);
  };
  render() {
    //   console.log(this.props)
    // const { onbuttonclick } = this.props;
    return (
      <section className="login-page">
        <div className="login-form" > 
          <h1 className="login-heading">Log In</h1>
          <div className="card col-9" id="alert" />
          <div className="form login">
            <div>
              <input
                type="email"
                onChange={this.onChangeHandler}
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                placeholder="password"
                required
                onChange={this.onChangeHandler}
              />
            </div>

            <div>
              <input
                type="submit"
                onClick={this.onButtonSubmit}
                value="LOG IN"
              />
            </div>

            <div className="forgotpassword">
              <p>
                <i>Forgot Password?</i>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = (state) => ({
    login: state.login,
});

export default connect(mapStateToProps, { loginUser })(Login);
