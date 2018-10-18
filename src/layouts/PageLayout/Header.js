import React from 'react'
import { Menu, Icon, Dropdown, Avatar } from 'antd'
const SubMenu = Menu.SubMenu
import './Header.scss'
class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = { current: 'mail' }
  }

  render () {
    const { collapsed, handler } = { ...this.props }
    const menu = (
      <Menu className='' selectedKeys={[]}>
        <Menu.Item key='userCenter'>
          <Icon type='user' />
          <span>User Info</span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key='logout'>
          <Icon type='logout' />
          <span>Log Out</span>
        </Menu.Item>
      </Menu>)
    return (
      <div className='header'>
        <Icon
          className='trigger'
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={handler}
            />
        <Dropdown overlay={menu}>
          <span className='right'>
            <Avatar
              size='small'
              className='avatar'
              src=''
              alt='avatar'
              />
            <span className=''>abc</span>
          </span>
        </Dropdown>
      </div>
    )
  };
}

export default Header
