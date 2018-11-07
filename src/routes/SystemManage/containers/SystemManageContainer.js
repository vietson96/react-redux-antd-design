import { connect } from 'react-redux'
import { increment } from '../modules/system-manage'

import SystemManage from '../components/SystemManage'

const mapDispatchToProps = {

  increment: () => {
    return increment(1)
  }
}

const mapStateToProps = (state) => {
  return ({
    systems: state.systems
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SystemManage)
