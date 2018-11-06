import React from 'react'
import PropTypes from 'prop-types'

class Profile extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    // let categoryElements = this.props.product.products.map((item, index) => <div key={index}> {item.Name}</div>)
    return (
      <div style={{ margin: '0 auto' }}>
        {/*<div>{categoryElements}</div>*/}
        <button className='btn btn-primary' onClick={this.props.increment}>
          Increment
        </button>
      </div>
    )
  }
}

export default Profile
