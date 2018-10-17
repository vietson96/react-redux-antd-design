import React from 'react'
import { connect } from 'react-redux'
import './Loading.scss'
import { Spin } from 'antd'

class Loading extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className={'loader' + (this.props.loading.isloading ? '' : ' loaded')}>
        <Spin className='spin' tip='Loading...' size='large' spinning={this.props.loading.isloading} />
      </div>
    )
  }
}

const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
  loading : state.loading
})

export default connect(mapStateToProps, mapDispatchToProps)(Loading)
