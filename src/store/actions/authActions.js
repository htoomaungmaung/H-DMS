import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

/*******************************************
 * action with dispatch actions below       *
 * the purpose is to receive payload and    *
 * transform data or do action              *
 * attach with action type before dispatch  *
 *******************************************/

export const resetAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const auth = (email, password, isSignup) => {
  return dispatch => {
    // start the auth process
    // verify password or sign up according to isSignup boolean
    // set the expiration timer
    // save token, expiration and userId to localStorage
    // dispatch auth success
    // if any error, dispatch auth fail
  };
};

export const setAuthRedirectPath = path => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path
  };
};

export const authCheckState = () => {
  return dispatch => {
    // get token from localStorage
    // if token is null, dispatch logout action
    // else check the expirationDate
    // if not expired yet, dispatch auth success action and reset the expiration timer
  };
};
