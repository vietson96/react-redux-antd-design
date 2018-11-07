import React from 'react'
import { Icon, Form, Input, Radio, Tabs, Breadcrumb, Button } from 'antd'
import PropTypes from 'prop-types'

const FormItem = Form.Item
const RadioGroup = Radio.Group
const TabPane = Tabs.TabPane

class Profile extends React.Component {
  constructor (props) {
    super(props)
  }
  componentWillMount () {
    this.props.increment()
  }

  render () {
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    }
    let profileElement = this.props.profile.profile
    return (
      <div style={{ margin: '0 16px' }}>
        <Button style={{ margin: '16px 0', right: 5 }}>
          Sửa
        </Button>
        <Tabs style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          <TabPane tab='User infor' key='1'>
            <Form layout='horizontal'>
              <FormItem label='UserName' {...formItemLayout}>
                <Input value={profileElement.username} disabled />
              </FormItem>
              <FormItem label='FullName' {...formItemLayout}>
                <Input value={profileElement.fullName} disabled />
              </FormItem>
              <FormItem label='Email' {...formItemLayout}>
                <Input value={profileElement.email} disabled />
              </FormItem>
              <FormItem label='Phone Number' {...formItemLayout}>
                <Input value={profileElement.phone} disabled />
              </FormItem>
              <FormItem label='Last Login' {...formItemLayout}>
                <Input value={profileElement.latestLoggedin} disabled />
              </FormItem>
              <FormItem label='Gender' {...formItemLayout}>
                <RadioGroup value={profileElement.genderId}>
                  <Radio value={1}>Nam</Radio>
                  <Radio value={2}>Nữ</Radio>
                  <Radio value={3}>Khác</Radio>
                </RadioGroup>
              </FormItem>
            </Form>
          </TabPane>
        </Tabs>
      </div>

    )
  }
}

export default Profile
