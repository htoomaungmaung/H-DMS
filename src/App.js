import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import AsyncComponent from "./hoc/asyncComponent/AsyncComponent";

import MiniDrawer from "./hoc/drawer/minidrawer/MiniDrawer";

const asyncCourseList = AsyncComponent(() => {
  return import("./containers/courseList/courseList");
});
class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/course" component={asyncCourseList} />
        <Route path="/" exact component={asyncCourseList} />
        <Redirect to="/" />
      </Switch>
    );

    return (
      <div>
        <MiniDrawer>{routes}</MiniDrawer>
      </div>
    );
  }
}

export default withRouter(App);
