import React from 'react'
import PropTypes from 'prop-types'
import SignInForm from './SignInForm'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import { config } from '../../../utils/config'
import '../../../../node_modules/antd/lib/style/themes/default.less'
import './SignIn.less'

const FormItem = Form.Item
// const { validateFieldsAndScroll, validateFields } = this.props

class SignIn extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        this.props.signIn(values)
      }
    })
  }

  handleOk = () => {
    this.props.form.validateFieldsAndScroll((errors, values) => {
      if (errors) { return false } else return true
    })
  }

  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className='login-form'>
        <div className='logo'>
          <img alt='logo' src={config.logo} />
          <span>{config.name}</span>
        </div>
        <FormItem hasFeedback>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} onPressEnter={this.handleSubmit} placeholder='Username' />
          )}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />} type='password' placeholder='Password' />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className='login-form-forgot' href=''>Forgot password</a>
          <Button type='primary' htmlType='submit' className='login-form-button'>
            Log in
          </Button>
          Or <a href=''>register now!</a>
        </FormItem>
      </Form>
    )
  }
}

SignIn.propTypes = {
  signin: PropTypes.object.isRequired,
  signIn: PropTypes.func.isRequired,
}

export default Form.create()(SignIn)
