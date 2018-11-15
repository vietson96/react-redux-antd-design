import { connect } from 'react-redux'
import { create, getDetail, getList, save } from '../modules/system-manage'

import SystemManage from '../components/SystemManage'

const mapDispatchToProps = {

  getList: (params) => {
    return getList(params)
  },

  getDetail: (id) => {
    return getDetail(id)
  },

  save: (data) => {
    return save(data)
  },

  create: (data) => {
    return create(data)
  }
}

const mapStateToProps = (state) => {
  return ({
    systems: state.systems
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SystemManage)
