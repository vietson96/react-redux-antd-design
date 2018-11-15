import { connect } from 'react-redux'
import { create, getDetail, save } from '../modules/system-manage'
import Detail from '../components/detail/Detail'

const mapDispatchToProps = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
