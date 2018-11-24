import * as actionTypes from "./actionTypes";

export const updateTitle = pageTitle => {
  return {
    type: actionTypes.UPDATE_PAGE_TITLE,
    pageTitle: pageTitle
  };
};

/*******************************************
 * action with dispatch actions below       *
 * the purpose is to receive payload and    *
 * transform data or do action              *
 * attach with action type before dispatch  *
 *******************************************/
export const updatePageTitle = pageTitle => {
  return dispatch => {
    dispatch(updateTitle(pageTitle));
  };
};
