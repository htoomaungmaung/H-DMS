import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actions";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

class Home extends Component {
  componentDidMount() {
    this.props.onContainerLoad("Home Page", "home");
  }
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          This is hobby project. Experimenting with React.
        </Typography>
        <Typography component="p">
          Items that will include in this project
          <input type="checkbox" defaultChecked /> React
          <input type="checkbox" defaultChecked /> Router
          <input type="checkbox" defaultChecked /> Material-UI
          <input type="checkbox" defaultChecked /> ContentFul API
          <input type="checkbox" defaultChecked /> Redux
          <input type="checkbox" defaultChecked /> Redux Thunk
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

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    onContainerLoad: (pageTitle, currentPage) =>
      dispatch(actions.updatePage(pageTitle, currentPage))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Home));
