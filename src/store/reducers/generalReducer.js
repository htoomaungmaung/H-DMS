import { updateObject } from "../../shared/utility";
import * as actionTypes from "../actions/actionTypes";

// for demo purpose, will store the selected tab value in redux store
const initialState = {
  pageTitle: null
};

const updatePageTitle = (state, action) => {
  return updateObject(state, {
    pageTitle: action.pageTitle
  });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_PAGE_TITLE:
      return updatePageTitle(state, action);
    default:
      return state;
  }
};

export default reducer;
