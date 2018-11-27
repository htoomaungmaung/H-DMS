import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START_CLEAR_DATA
  };
};

export const authSuccess = (token, userId, name) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId,
    name: name
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
  localStorage.removeItem("name");
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

export const updateAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const auth = (name, email, password, isSignup) => {
  return dispatch => {
    localStorage.setItem("token", "respons");
    localStorage.setItem("expirationDate", expirationDate);
    localStorage.setItem("userId", "respons");
    localStorage.setItem("name", "name");
    console.log("Auth start!");
    const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
    dispatch(authStart());
    dispatch(authSuccess("token", "userid", "name"));
    dispatch(updateAuthTimeout(100000000));
    // start the auth process
    // verify password or sign up according to isSignup boolean
    // set the expiration timer
    // save token, expiration and userId to localStorage
    // dispatch auth success
    // if any error, dispatch auth fail
  };
};

export const authCheckState = () => {
  return dispatch => {
    // get token from localStorage
    const token = localStorage.getItem("token");
    // if token is absent, dispatch logout action
    if (!token) {
      dispatch(logout());
    }
    // else check the expirationDate
    else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        // if not expired yet, dispatch auth success action and reset the expiration timer
        const userId = localStorage.getItem("userId");
        const name = localStorage.getItem("name");
        dispatch(authSuccess(token, userId, name));
        dispatch(
          // TODO: need to renew the token if the user is active on the website
          updateAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};
