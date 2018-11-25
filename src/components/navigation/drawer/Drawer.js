import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import DashBoard from "@material-ui/icons/Dashboard";
import ClassIcon from "@material-ui/icons/Class";
import SettingIcon from "@material-ui/icons/Settings";
import CloutOffIcon from "@material-ui/icons/CloudOff";
import CloudQueueIcon from "@material-ui/icons/CloudQueue";
import { Link } from "react-router-dom";
const drawerWidth = 240;
const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9 + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  }
});

const CustomDrawer = props => {
  const { classes, theme } = props;
  return (
    <Drawer
      variant="permanent"
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: props.drawerState,
        [classes.drawerClose]: !props.drawerState
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: props.drawerState,
          [classes.drawerClose]: !props.drawerState
        })
      }}
      open={props.drawerState}
    >
      <div className={classes.toolbar}>
        <ListItem
          button
          component={Link}
          to="/auth"
          selected={props.currentPage === "auth"}
          onClick={event => (
            props.listItemClick(event, 0),
            props.updateToolbarTitle(event, "Connect Me To System")
          )}
        >
          <ListItemIcon>
            <CloudQueueIcon />
          </ListItemIcon>
          <ListItemText primary="Connect" />
        </ListItem>
        <IconButton onClick={props.drawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List component="nav">
        <ListItem
          button
          component={Link}
          to="/"
          selected={props.currentPage === "home"}
          onClick={event => (
            props.listItemClick(event, 1),
            props.updateToolbarTitle(event, "Digital Management System")
          )}
        >
          <ListItemIcon>
            <DashBoard />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/course"
          selected={props.currentPage === "course"}
          onClick={event => (
            props.listItemClick(event, 2),
            props.updateToolbarTitle(event, "Course")
          )}
        >
          <ListItemIcon>
            <ClassIcon />
          </ListItemIcon>
          <ListItemText primary="Course" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav">
        <ListItem
          button
          component={Link}
          to="/settings"
          selected={props.currentPage === "settings"}
          onClick={event => (
            props.listItemClick(event, 3),
            props.updateToolbarTitle(event, "Settings")
          )}
        >
          <ListItemIcon>
            <SettingIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/"
          selected={props.currentPage === ""}
          onClick={event => (
            props.listItemClick(event, 1),
            props.updateToolbarTitle(event, "Digital Management System")
          )}
        >
          <ListItemIcon>
            <CloutOffIcon />
          </ListItemIcon>
          <ListItemText primary="Disconnect" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default withStyles(styles, { withTheme: true })(CustomDrawer);
