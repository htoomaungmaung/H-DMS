import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import AsyncComponent from "./hoc/asyncComponent/AsyncComponent";
import { connect } from "react-redux";
import Layout from "./hoc/layout/Layout";
import * as actions from "./store/actions/actions";
import Logout from "./containers/auth/logout";
import CustomizedSnackbar from "./shared/snackBar/CustomizedSnackbars";
const asyncCourseList = AsyncComponent(() => {
  return import("./containers/courseList/courseList");
});
const asyncHome = AsyncComponent(() => {
  return import("./containers/system/home");
});
const asyncAuth = AsyncComponent(() => {
  return import("./containers/auth/auth");
});
const asyncSettings = AsyncComponent(() => {
  return import("./containers/system/settings");
});

class App extends Component {
  componentDidMount() {
    this.props.checkAuthState();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={asyncAuth} />
        <Route path="/" exact component={asyncHome} />
        <Redirect to="/" />
      </Switch>
    );
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/course" component={asyncCourseList} />
          <Route path="/auth" component={asyncAuth} />
          <Route path="/settings" component={asyncSettings} />
          <Route path="/logout" exact component={Logout} />
          <Route path="/" exact component={asyncHome} />
          <Redirect to="/" />
        </Switch>
      );
    }
    return (
      <div>
        <Layout>{routes}</Layout>
        {this.props.snackBarType != "" && this.props.snackBarMessage != "" ? (
          <CustomizedSnackbar variant={this.props.snackBarType}>
            {this.props.snackBarMessage}
          </CustomizedSnackbar>
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
    snackBarType: state.auth.snackBarType,
    snackBarMessage: state.auth.snackBarMessage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkAuthState: () => dispatch(actions.authCheckState())
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
