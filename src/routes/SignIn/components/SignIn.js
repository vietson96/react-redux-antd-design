import React from 'react'
import PropTypes from 'prop-types'
import SignInForm from './SignInForm'
import styles from './index.less'
import { config } from '../../utils'

class SignIn extends React.Component {
  constructor (props) {
    super(props)
  }

  handleSubmit = (user) => {
    // Do something with the form values
    this.props.signIn(user)
  };

  render () {
    return (
      <div className={styles.form}>
        <div className={styles.logo}>
          <img alt='logo' src='/public/logo.svg' />
          <span>Ant Design</span>
        </div>
        <SignInForm onSubmit={this.handleSubmit} signIn={this.props.signin} />
      </div>
    )
  }
}

SignIn.propTypes = {
  signin: PropTypes.object.isRequired,
  signIn: PropTypes.func.isRequired,
}

export default SignIn
