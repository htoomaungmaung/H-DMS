import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "../../components/navigation/appBar/AppBar";
import Drawer from "../../components/navigation/drawer/Drawer";
const styles = theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  }
});

class Layout extends Component {
  state = {
    toolbarTitle: "",
    open: false
  };
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };
  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  updateToolbarTitle = title => {
    this.setState({ toolbarTitle: title });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          toolbarTitle={this.state.toolbarTitle}
          drawerState={this.state.open}
          drawerOpen={this.handleDrawerOpen}
          drawerClose={this.handleDrawerClose}
        />
        <Drawer />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(Layout);
