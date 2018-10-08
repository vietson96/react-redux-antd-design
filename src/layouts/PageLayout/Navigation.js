import React from 'react'
import { Menu, Icon, Button, Layout } from 'antd'
// const SubMenu = Menu.SubMenu
import { config } from '../../utils/config'
class Navigation extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <div className='logo'>
          <img alt='logo' src='../../assets/logo.svg' />
          {this.props.collapsed ? '' : <span>AntD Admin</span>}
        </div>
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
          <Menu.Item key='1'>
            <Icon type='user' />
            <span>nav 1</span>
          </Menu.Item>
          <Menu.Item key='2'>
            <Icon type='video-camera' />
            <span>nav 2</span>
          </Menu.Item>
          <Menu.Item key='3'>
            <Icon type='upload' />
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </div>
    )
  };
}

export default Navigation
