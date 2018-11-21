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
          This is hobby project.
        </Typography>
        <Typography component="p">
          Items that will include in this project
          <p>
            <input type="checkbox" checked /> React
          </p>
          <p>
            <input type="checkbox" checked /> Router
          </p>
          <p>
            <input type="checkbox" checked /> Material-UI
          </p>
          <p>
            <input type="checkbox" checked /> ContentFul API
          </p>
          <p>
            <input type="checkbox" /> Redux
          </p>
          <p>
            <input type="checkbox" /> Redux Thunk
          </p>
          <p>
            <input type="checkbox" /> Axios
          </p>
          <p>
            <input type="checkbox" /> Firebase
          </p>
          <p>
            <input type="checkbox" /> Authentication
          </p>
          <p>
            <input type="checkbox" /> Oauth
          </p>
          <p>
            <input type="checkbox" /> Auth0
          </p>
          <p>
            <input type="checkbox" /> Web Socket
          </p>
        </Typography>
      </Paper>
    );
  }
}

export default withStyles(styles)(Home);
