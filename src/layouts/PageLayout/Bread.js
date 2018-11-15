import React from 'react'
import { Breadcrumb } from 'antd'

class Bread extends React.Component {
  render () {
    return (
      <Breadcrumb className='bread' style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}

export default Bread
