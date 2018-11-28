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
import ClassIcon from "@material-ui/icons/Class";
import SettingIcon from "@material-ui/icons/Settings";
import CloutOffIcon from "@material-ui/icons/CloudOff";
import CloudQueueIcon from "@material-ui/icons/CloudQueue";
import SvgIcon from "@material-ui/core/SvgIcon";
import AccountCircle from "@material-ui/icons/AccountCircle";
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
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
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
        {!props.isAuthenticated ? (
          <ListItem
            button
            component={Link}
            to="/auth"
            selected={props.currentPage === "auth"}
          >
            <ListItemIcon>
              <CloudQueueIcon />
            </ListItemIcon>
            <ListItemText primary="Connect" />
          </ListItem>
        ) : (
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
        )}
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
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        {props.isAuthenticated ? (
          <ListItem
            button
            component={Link}
            to="/course"
            selected={props.currentPage === "course"}
          >
            <ListItemIcon>
              <ClassIcon />
            </ListItemIcon>
            <ListItemText primary="Course" />
          </ListItem>
        ) : null}
      </List>
      {props.isAuthenticated ? (
        <div>
          <Divider />
          <List component="nav">
            <ListItem
              button
              component={Link}
              to="/settings"
              selected={props.currentPage === "settings"}
            >
              <ListItemIcon>
                <SettingIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button component={Link} to="/logout">
              <ListItemIcon>
                <CloutOffIcon />
              </ListItemIcon>
              <ListItemText primary="Disconnect" />
            </ListItem>
          </List>
        </div>
      ) : null}
    </Drawer>
  );
};

export default withStyles(styles, { withTheme: true })(CustomDrawer);
