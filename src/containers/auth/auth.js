import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from "../../store/actions/actions";

import SignInForm from "../../components/forms/signInForm";

class auth extends Component {
  state = {
    isSignup: false
  };
  componentDidMount() {
    this.props.onContainerLoad("Authentication Page", "auth");
  }
  toggleSignup = event => {
    this.setState({ isSignup: event.target.checked });
  };
  submitHandler = event => {
    event.preventDefault();
    console.log("submit handler");
  };
  render() {
    let authRedirect = null;
    if (this.props.isAuthenticated) {
      authRedirect = <Redirect to={this.props.authRedirectPath} />;
    }

    return (
      <div>
        {authRedirect}
        <SignInForm
          isSignup={this.state.isSignup}
          toggleSignup={this.toggleSignup}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pageTitle: state.general.pageTitle,
    isAuthenticated: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath
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
