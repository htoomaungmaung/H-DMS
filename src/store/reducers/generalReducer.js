import { updateObject } from "../../shared/utility";
import * as actionTypes from "../actions/actionTypes";

// for demo purpose, will store the selected tab value in redux store
const initialState = {
  pageTitle: "",
  currentPage: ""
};

const updatePageTitle = (state, action) => {
  return updateObject(state, {
    pageTitle: action.pageTitle,
    currentPage: action.currentPage
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_PAGE:
      return updatePageTitle(state, action);
    default:
      return state;
  }
};

export default reducer;
