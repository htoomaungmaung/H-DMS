import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import SignInForm from "../../components/forms/signInForm";
import Paper from "@material-ui/core/Paper";
import * as Yup from "yup";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actions";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockIcon from "@material-ui/icons/LockOutlined";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class auth extends Component {
  componentDidMount() {
    this.props.onContainerLoad("Authentication Page", "auth");
  }

  state = {
    isSignUp: false
  };

  handleChange = event => {
    this.setState({ isSignUp: event.target.checked });
    this.forceUpdate();
  };

  render() {
    const { classes } = this.props;

    let validationSchema;
    if (this.state.isSignUp) {
      validationSchema = Yup.object({
        name: Yup.string("Enter a name").required("Name is required"),
        email: Yup.string("Enter your email")
          .email("Enter a valid email")
          .required("Email is required"),
        password: Yup.string("")
          .min(8, "Password must contain atleast 8 characters")
          .required("Enter your password"),
        confirmPassword: Yup.string("Enter your password")
          .required("Confirm your password")
          .oneOf([Yup.ref("password")], "Password does not match")
      });
    } else {
      validationSchema = Yup.object({
        email: Yup.string("Enter your email")
          .email("Enter a valid email")
          .required("Email is required"),
        password: Yup.string("")
          .min(8, "Password must contain atleast 8 characters")
          .required("Enter your password")
      });
    }

    const formValues = {
      name: "",
      email: "",
      confirmPassword: "",
      password: ""
    };

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper elevation={1} className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
            <Switch
              checked={this.state.isSignUp}
              onChange={this.handleChange}
              value=""
              color="primary"
            />
            Sign up
          </Typography>
          <Formik
            isSignUp={this.state.isSignUp}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
              alert(JSON.stringify(values));
            }}
            render={props => (
              <SignInForm
                isSignUp={this.state.isSignUp}
                className={classes.form}
                {...props}
              />
            )}
            initialValues={formValues}
            validationSchema={validationSchema}
          />
        </Paper>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    pageTitle: state.general.pageTitle,
    isAuthenticated: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath
  };
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
)(withStyles(styles)(auth));
