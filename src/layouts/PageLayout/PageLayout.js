import React from 'react'
import Header from './Header.js'
import Navigation from './Navigation.js'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import { Layout, Icon, Switch } from 'antd'
import { config } from "../../utils/config";
const { Sider, Content } = Layout

class PageLayout extends React.Component {
  constructor (props) {
    super(props)
    this.state = { collapsed: false, theme: 'light' }

    this.handler = this.handler.bind(this)
    this.changeTheme = this.changeTheme.bind(this)
  }

  handler (e) {
    e.preventDefault()
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    })
  }

  render () {
    return (
      <Layout style={{ height: '100%' }}>
        <Sider
          theme={this.state.theme}
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <Navigation theme={this.state.theme} collapsed={this.state.collapsed} />
          <div className='switchtheme'>
            { this.state.collapsed ? '' : <span><Icon type='bulb' /><span>Switch Theme</span></span>}
            <Switch
              checked={this.state.theme === 'dark'}
              onChange={this.changeTheme}
              checkedChildren='Dark'
              unCheckedChildren='Light'
        />
          </div>
        </Sider>
        <Layout>
          <Header handler={this.handler} collapsed={this.state.collapsed} />
          <Content>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    )
  }
}

PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
