import { connect } from 'react-redux'
import { getList } from '../modules/system-manage'

import SystemManage from '../components/SystemManage'

const mapDispatchToProps = {

  getList: (params) => {
    return getList(params)
  }
}

const mapStateToProps = (state) => {
  return ({
    systems: state.systems
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SystemManage)
