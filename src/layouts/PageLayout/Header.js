import React from 'react'
import { Menu, Icon, Dropdown, Avatar } from 'antd'
import './Header.scss'
import { connect } from 'react-redux'
import { logOut } from '../../components/AppReducer'
import { browserHistory, Link } from 'react-router'

const SubMenu = Menu.SubMenu

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = { current: 'mail' }
    this.redirectToSignin = this.redirectToSignin.bind(this)
  }

  redirectToSignin () {
    browserHistory.push('/signin')
  }

  render () {
    const { collapsed, handler, dispatch } = { ...this.props }
    const menu = (
      <Menu className='' selectedKeys={[]}>
        <Menu.Item key='userCenter'>
          <Link to='/profile'>
            <Icon type='user' />
            <span>User Info</span>
          </Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key='logout' onClick={() => {
          dispatch(logOut()); this.redirectToSignin()
        }}>
          <Icon type='logout' />
          <span>Log Out</span>
          {/* <Link to='/signin'> <Icon type='logout' /> */}
          {/* Log Out</Link> */}
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

export default connect()(Header)
