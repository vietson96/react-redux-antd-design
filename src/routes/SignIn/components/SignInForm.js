import React, { Component } from 'react'
import { createStore, combineReducers } from 'redux'
import { Field, reduxForm } from 'redux-form'
import { browserHistory } from 'react-router'
import { Button, Row, Form, Input } from 'antd'
import PropTypes from 'prop-types'
import 'antd/dist/antd.less'

const validate = values => {
  const errors = {}
  let username = values.username
  let password = values.password
  if (!username) {
    errors.username = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(username)) {
    errors.username = 'Invalid email address'
  }

  if (!password) {
    errors.password = 'Required'
  }
  // else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(values.password)) {
  //  errors.password = 'Invalid email password';
  // }
  return errors
}

const warn = values => {
  const warnings = {}
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
}

const FormItem = Form.Item
//
// const Login = ({
//                  loading,
//                  dispatch,
//                  form: {
//                    getFieldDecorator,
//                    validateFieldsAndScroll,
//                  },
//                }) => {
//   function handleOk () {
//     validateFieldsAndScroll((errors, values) => {
//       if (errors) {
//         return
//       }
//       dispatch({ type: 'login/login', payload: values })
//     })
//   }

class SignInForm extends Component {
  renderField = ({ input, type, placeholder, icon, meta: { touched, error, warning, pristine } }) => (
    <div className='form-group has-feedback'>
      <input {...input} type={type} placeholder={placeholder}
        className={'form-control form-control-lg' + ((touched && error) || (!pristine && error) ? ' error' : !pristine ? ' valid' : '')} />
      <span className={'glyphicon form-control-feedback ' + icon} />
      {touched && ((error && <label className='error'>{error}</label>) || (warning &&
      <span className='text-warning'>{warning}</span>))}
    </div>
  );

  // redux form
  render () {
    const { handleSubmit, signIn, pristine, reset, submitting } = this.props
    let signInFailedMessage = !pristine && signIn.signInErrorMessage ? (<label className='error' style={{ textAlign: 'center' }}>{signIn.signInErrorMessage}</label>) : ''
    return (
      <form>
        <FormItem hasFeedback>

          <Input placeholder='Username' />
        </FormItem>
        <FormItem hasFeedback>
          <Input type='password' placeholder='Password' />
        </FormItem>
        <Row>
          <Button type='primary'>
            Sign in
          </Button>
          <p>
            <span>Username：guest</span>
            <span>Password：guest</span>
          </p>
        </Row>

      </form>

      // <form onSubmit={handleSubmit} className={styles.form} >
      //
      //   <Field name='username' type='email' component={this.renderField}
      //     placeholder='Username@gmail.com' icon='glyphicon-envelope' />
      //   <Field name='password' type='password' icon='glyphicon-lock' component={this.renderField} placeholder='********' />
      //
      //   {signInFailedMessage}
      //
      // </form>
    )
  }
}
  // Login.propTypes = {
  //   form: PropTypes.object,
  //   dispatch: PropTypes.func,
  //   loading: PropTypes.object,
  // }
// Decorate the form component
SignInForm = reduxForm({
  form: 'SignIn', // a unique name for this form
  validate,                // <--- validation function given to redux-form
  warn                     // <--- warning function given to redux-form
})(SignInForm)

export default SignInForm
