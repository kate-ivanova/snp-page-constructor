import React, {Component} from 'react';
import {connect} from 'react-redux';
import PageCreator from 'components/PageCreator';

class PageCreatorContainer extends Component {
  render() {
    return <PageCreator {...this.props} />;
  }
}
const mapStateToProps = state => ({
  ...state,
});

export default connect(
  mapStateToProps,
  null,
  null,
)(PageCreatorContainer);
