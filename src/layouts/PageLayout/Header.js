import React from 'react'
import { Menu, Icon } from 'antd'
const SubMenu = Menu.SubMenu
class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = { current: 'mail' }
  }

  render () {
    const { collapsed, handler } = { ...this.props }
    return (
      <div>

        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode='horizontal' >
          <Menu.Item className='trigger'>
            <Icon
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={handler}
            />
          </Menu.Item>
          <SubMenu
            style={{
              float: 'right',
            }}
            title={<span>
              <Icon type='user' />
            abc
            </span>}
        >
            <Menu.Item key='logout'>
            Sign out
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  };
}

export default Header
