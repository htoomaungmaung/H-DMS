import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  token: null,
  userId: null,
  name: null,
  error: null,
  loading: false,
  snackBarType: "",
  snackBarMessage: "",
  authRedirectPath: "/"
};

const authStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};
const snackBarMessageUpdate = (state, action) => {
  return updateObject(state, {
    snackBarType: action.snackBarType,
    snackBarMessage: action.snackBarMessage
  });
};
const authSuccess = (state, action) => {
  console.log("auth success!");
  return updateObject(state, {
    token: action.idToken,
    userId: action.userId,
    name: action.name,
    error: null,
    loading: false,
    snackBarType: "success",
    snackBarMessage: "Successfully Sign in!"
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const authLogout = (state, action) => {
  return updateObject(state, { token: null, userId: null, name: null });
};

const setAuthRedirectPath = (state, action) => {
  return updateObject(state, { authRedirectPath: action.path });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START_CLEAR_DATA:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    default:
      return state;
  }
};

export default reducer;
