import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import AsyncComponent from "./hoc/asyncComponent/AsyncComponent";

import Layout from "./hoc/layout/Layout";

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
  render() {
    let routes = (
      <Switch>
        <Route path="/course" component={asyncCourseList} />
        <Route path="/auth" component={asyncAuth} />
        <Route path="/settings" component={asyncSettings} />
        <Route path="/" exact component={asyncHome} />
        <Redirect to="/" />
      </Switch>
    );

    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

export default withRouter(App);
