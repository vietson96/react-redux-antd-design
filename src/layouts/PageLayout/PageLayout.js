import React from 'react'
import Header from './Header.js'
import Navigation from './Navigation.js'
import PropTypes from 'prop-types'
import 'antd/dist/antd.less'
import './PageLayout.scss'
import { Layout, Icon } from 'antd'
const { Sider, Content } = Layout

class PageLayout extends React.Component {
  constructor (props) {
    super(props)
    this.state = { collapsed: false }

    this.handler = this.handler.bind(this)
  }

  handler (e) {
    e.preventDefault()
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render () {
    return (
      <Layout style={{ height: '100%' }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <Navigation collapsed={this.state.collapsed} />
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
