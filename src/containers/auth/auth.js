import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actions";

class auth extends Component {
  componentDidMount() {
    this.props.onContainerLoad("Authentication Page", "auth");
  }

  render() {
    return (
      <div>This is Auth component and page title is {this.props.pageTitle}</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pageTitle: state.general.pageTitle
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onContainerLoad: (pageTitle, currentPage) =>
      dispatch(actions.updatePage(pageTitle, currentPage))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(auth);
