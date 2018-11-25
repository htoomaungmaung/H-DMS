import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actions";
class settings extends Component {
  componentDidMount() {
    this.props.onContainerLoad("Settings", "settings");
  }
  render() {
    return <div>This is settings</div>;
  }
}
const mapStateToProps = state => {
  return {};
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
)(settings);
