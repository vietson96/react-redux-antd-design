import React from 'react'
import { Form, Input, Tabs, Button } from 'antd'
import { createForm } from 'rc-form'

const FormItem = Form.Item
const TabPane = Tabs.TabPane
const CustomizedForm = Form.create({
  onFieldsChange (props, changedFields) {
    if (changedFields.name) {
      props.data.name = changedFields.name.value
    } else if (changedFields.groupCode) {
      props.data.groupCode = changedFields.groupCode.value
    } else if (changedFields.group) {
      props.data.group = changedFields.group.value
    }
  },
  mapPropsToFields (props) {
    if (!props.data) {
      props.data = [
        {
          name: '',
          group: '',
          groupCode: ''
        }
      ]
      return
    }
    return {
      name: Form.createFormField({
        value: props.data.name,
      }),
      groupCode: Form.createFormField({
        value: props.data.groupCode,
      }),
      group: Form.createFormField({
        value: props.data.group,
      })
    }
  },
})((props) => {
  const { getFieldDecorator } = props.form
  return (
    <Form layout='inline'>
      <FormItem label='Name'>
        {getFieldDecorator('name', {
          rules: [{ required: true, message: 'Name is required!' }],
        })(<Input />)}
      </FormItem>
      <FormItem label='Group code'>
        {getFieldDecorator('groupCode', {
          rules: [{ required: true, message: 'Group Code is required!' }],
        })(<Input />)}
      </FormItem>
      <FormItem label='Group'>
        {getFieldDecorator('group', {
          rules: [{ required: true, message: 'Group is required!' }],
        })(<Input />)}
      </FormItem>
    </Form>
  )
})

class Detail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pageType: 'new',
    }
    this.save = this.save.bind(this)
  }
  componentDidMount () {
    if (this.props.routeParams.id) {
      this.props.getDetail(this.props.routeParams.id)
      this.setState({
        pageType: 'edit'
      })
    }
  }
  save () {
    const { save, create, form, systems } = this.props
    if (form.getFieldsValue() && systems && systems.systems) {
      var data = Object.assign({}, systems.systems, form.getFieldsValue())
      if (this.props.routeParams.id) {
        save(data)
      } else {
        debugger
        create(data)
      }
    }
  }

  render () {
    if (this.props.systems) {
      var systemElement = this.props.systems.systems
    }
    return (
      <div style={{ margin: '0 16px' }}>
        <Button onClick={this.save}>Save</Button>
        <Tabs style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          <TabPane tab='System infor' key='1'>
            <CustomizedForm data={systemElement} />
          </TabPane>
        </Tabs>

      </div>

    )
  }
}

export default createForm()(Detail)
