import React from 'react'
import { IndexLink, Link } from 'react-router'
import Header from './Header.js'
import Navigation from './Navigation.js'
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className='page-layout sidebar-mini'>
    <div id='dashboard-container'>
      <div className='wrapper'>
        <Header />
        <Navigation />
        <div className='content-wrapper'>
          {children}
        </div>
      </div>
    </div>
  </div>
)

PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
