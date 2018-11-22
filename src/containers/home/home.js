import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          This is hobby project. Experimenting with React.
        </Typography>
        <Typography component="p">
          Items that will include in this project
          <input type="checkbox" checked /> React
          <input type="checkbox" checked /> Router
          <input type="checkbox" checked /> Material-UI
          <input type="checkbox" checked /> ContentFul API
          <input type="checkbox" /> Redux
          <input type="checkbox" /> Redux Thunk
          <input type="checkbox" /> Axios
          <input type="checkbox" /> Firebase
          <input type="checkbox" /> Authentication
          <input type="checkbox" /> Oauth
          <input type="checkbox" /> Auth0
          <input type="checkbox" /> Web Socket
        </Typography>
      </Paper>
    );
  }
}

export default withStyles(styles)(Home);
