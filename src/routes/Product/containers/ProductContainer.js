import { connect } from 'react-redux'
import { increment } from '../modules/product'

import Product from '../components/Product'

const mapDispatchToProps = {
  increment : () => increment(1)
}

const mapStateToProps = (state) => ({
  product : state.product
})

export default connect(mapStateToProps, mapDispatchToProps)(Product)
