import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Loading.scss'

class Loading extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={"cssload-container" + (this.props.loading.isloading ? '' : ' loaded')}>
        <div className="cssload-shaft1"></div>
        <div className="cssload-shaft2"></div>
        <div className="cssload-shaft3"></div>
        <div className="cssload-shaft4"></div>
        <div className="cssload-shaft5"></div>
        <div className="cssload-shaft6"></div>
        <div className="cssload-shaft7"></div>
        <div className="cssload-shaft8"></div>
        <div className="cssload-shaft9"></div>
        <div className="cssload-shaft10"></div>
      </div>
    );
  }
}

const mapDispatchToProps = {
};

const mapStateToProps = (state) => ({
  loading : state.loading
});

export default connect(mapStateToProps, mapDispatchToProps)(Loading)
