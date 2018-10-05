import React from 'react'
import PropTypes from 'prop-types'
import SignInForm from './SignInForm'

class SignIn extends React.Component {
  constructor(props) {
    super(props)
  }

  handleSubmit = (user) => {
    // Do something with the form values
    this.props.signIn(user);
  };

  render() {
    return (
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html"><b>Admin</b>LTE</a>
        </div>
        {/* <!-- /.login-logo --> */}
        <div className="login-box-body">
          <p className="login-box-msg">Sign in to start your session</p>

          <SignInForm onSubmit={this.handleSubmit} signIn={this.props.signin}/>

          <div className="social-auth-links text-center">
            <p>- OR -</p>
            <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i
              className="fa fa-facebook"></i> Sign in using
              Facebook</a>
            <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i
              className="fa fa-google-plus"></i> Sign in using
              Google+</a>
          </div>
          {/* <!-- /.social-auth-links --> */}

          <a href="#">I forgot my password</a>
          <br/>
          <a href="register.html" className="text-center">Register a new membership</a>

        </div>
        {/* <!-- /.login-box-body --> */}
      </div>
    );
  }
}

SignIn.propTypes = {
  signin: PropTypes.object.isRequired,
  signIn: PropTypes.func.isRequired,
}

export default SignIn
