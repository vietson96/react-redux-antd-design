import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import { Menu, Icon, Popover, Button } from 'antd'
import Navigation from './Navigation'
// import 'antd/dist/antd.less'
const SubMenu = Menu.SubMenu
class Header extends React.Component {
  state = {
    current: 'mail',
  }

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode='horizontal' >
          <Icon
            className="trigger"
            type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.props.handler}
          />
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
