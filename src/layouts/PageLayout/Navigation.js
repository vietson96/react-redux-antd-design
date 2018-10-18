import React from 'react'
import { Menu, Icon, Button, Layout } from 'antd'
import { config } from '../../utils/config'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup
class Navigation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      openKeys: ['sub1'],
    }
  }
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1)
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys })
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      })
    }
  }

  render () {
    return (
      <div>
        <div className='logo'>
          <img alt='logo' src={config.logo} />
          {this.props.collapsed ? '' : <span>{config.name}</span>}
        </div>
        <Menu
          theme={this.props.theme}
          defaultSelectedKeys={['1']}
          // onOpenChange={this.onOpenChange}
          // openKeys={this.state.openKeys}
          mode='inline'
        >
          <Menu.Item key='1'>
            <Icon type='user' />
            <span>nav 1</span>
          </Menu.Item>
          <SubMenu key='sub1' title={<span><Icon type='mail' /><span>Navigation One</span></span>}>
            <MenuItemGroup key='g1' title='Item 1'>
              <Menu.Item key='1'>Option 1</Menu.Item>
              <Menu.Item key='2'>Option 2</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup key='g2' title='Item 2'>
              <Menu.Item key='3'>Option 3</Menu.Item>
              <Menu.Item key='4'>Option 4</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <SubMenu key='sub2' title={<span><Icon type='appstore' /><span>Navigation Two</span></span>}>
            <Menu.Item key='5'>Option 5</Menu.Item>
            <Menu.Item key='6'>Option 6</Menu.Item>
            <SubMenu key='sub3' title='Submenu'>
              <Menu.Item key='7'>Option 7</Menu.Item>
              <Menu.Item key='8'>Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key='sub4' title={<span><Icon type='setting' /><span>Navigation Three</span></span>}>
            <Menu.Item key='9'>Option 9</Menu.Item>
            <Menu.Item key='10'>Option 10</Menu.Item>
            <Menu.Item key='11'>Option 11</Menu.Item>
            <Menu.Item key='12'>Option 12</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  };
}
export default Navigation
