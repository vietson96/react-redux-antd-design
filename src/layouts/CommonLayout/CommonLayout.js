import React from 'react'
import PropTypes from 'prop-types'
import './CommonLayout.scss'
import '../../styles/main.scss'

export const CommonLayout = ({ children }) => (
  <div className="hold-transition">
    <div>
      {children}
    </div>
  </div>
)

CommonLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default CommonLayout
