import { connect } from 'react-redux'
import { increment } from '../modules/profile'

import Profile from '../components/Profile'

const mapDispatchToProps = {
  increment : () => increment(1)
}

const mapStateToProps = (state) => {
  debugger
  return ({
    profile: state.profile
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
