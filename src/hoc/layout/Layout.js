import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "../../components/navigation/appBar/AppBar";
import Drawer from "../../components/navigation/drawer/Drawer";
import { connect } from "react-redux";
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
    open: false,
    selectedIndex: 1
  };
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };
  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  updateToolbarTitle = (event, title) => {
    this.setState({ toolbarTitle: title });
  };
  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          toolbarTitle={this.props.pageTitle}
          drawerState={this.state.open}
          drawerOpen={this.handleDrawerOpen}
          drawerClose={this.handleDrawerClose}
        />
        <Drawer
          drawerState={this.state.open}
          drawerOpen={this.handleDrawerOpen}
          drawerClose={this.handleDrawerClose}
          updateToolbarTitle={this.updateToolbarTitle}
          listItemClick={this.handleListItemClick}
          currentPage={this.props.currentPage}
        />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.props.children}
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pageTitle: state.general.pageTitle,
    currentPage: state.general.currentPage
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Layout));
