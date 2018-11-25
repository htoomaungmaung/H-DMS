import * as actionTypes from "./actionTypes";

export const updateCurrentPage = (pageTitle, currentPage) => {
  return {
    type: actionTypes.UPDATE_PAGE,
    pageTitle: pageTitle,
    currentPage: currentPage
  };
};

/*******************************************
 * action with dispatch actions below       *
 * the purpose is to receive payload and    *
 * transform data or do action              *
 * attach with action type before dispatch  *
 *******************************************/
export const updatePage = (pageTitle, currentPage) => {
  return dispatch => {
    dispatch(updateCurrentPage(pageTitle, currentPage));
  };
};
