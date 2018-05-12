import * as ApiUtil from '../util/api_util';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';
export const MOD_DROPDOWN = 'MOD_DROPDOWN';
export const DROPDOWN_ITEM_SELECTED = 'DROPDOWN_ITEM_SELECTED';
export const ADD_TO_TASK = 'ADD_TO_TASK';

export const fetchCategories = () => {

  return (dispatch) => {
    return ApiUtil.fetchCategories().then(categories => {
      return dispatch({type: RECEIVE_CATEGORIES, categories})
    });
  };
};

export const fetchLocations = () => {

  return (dispatch) => {
    return ApiUtil.fetchLocations().then(locations => {
      return dispatch({type: RECEIVE_LOCATIONS, locations})
    });
  };
};

export const addToTask = (taskParam) => {
  return {
    type: ADD_TO_TASK,
    taskParam
  }
}

export const modDropdown = (status) => {

  return {
    type: MOD_DROPDOWN,
    status
  }
}

export const dropDownItemSelected = (location) => {
  return {
    type: DROPDOWN_ITEM_SELECTED,
    location
  };
};
