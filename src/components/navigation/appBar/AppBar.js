import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";

const drawerWidth = 240;
const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  chevronLeftButton: {
    marginLeft: -12
  },
  hide: {
    display: "none"
  },
  show: {
    display: "block"
  }
});

const CustomAppBar = props => {
  const { classes } = props;
  return (
    <AppBar
      position="fixed"
      className={classNames(classes.appBar, {
        [classes.appBarShift]: props.drawerState
      })}
    >
      <Toolbar disableGutters={!props.drawerState}>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={props.drawerOpen}
          className={classNames(classes.menuButton, {
            [classes.hide]: props.drawerState
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          onClick={props.drawerClose}
          variant="h6"
          color="inherit"
          noWrap
        >
          {props.toolbarTitle.trim() === ""
            ? "Digital Management System"
            : props.toolbarTitle}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

CustomAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomAppBar);
