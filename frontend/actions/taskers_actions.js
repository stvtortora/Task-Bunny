import * as ApiUtil from '../util/api_util';
import { openModal } from './modal_actions';
export const UPDATE_TASKER = 'UPDATE_TASKER';
export const RECEIVE_TASKER_INFO = 'RECEIVE_TASKER_INFO';
export const EDIT_TASKER_LOCATION = 'EDIT_TASKER_LOCATION';
export const EDIT_TASKER_RATE = 'EDIT_TASKER_RATE';
export const EDIT_TASKER_DESCRIPTION = 'EDIT_TASKER_DESCRIPTION';
export const EDIT_TASKER_CATEGORIES = 'EDIT_TASKER_CATEGORIES';
export const EDIT_TASKER_PHOTO = 'EDIT_TASKER_PHOTO';
export const AFFIRM_LOCATION_CHANGE = 'AFFIRM_LOCATION_CHANGE';
export const CANCEL_LOCATION_CHANGE ='CANCEL_LOCATION_CHANGE';

export const fetchSchedule = (tasker_id) => {
  return dispatch => {
    return ApiUtil.fetchSchedule(tasker_id).then(schedule => {
      dispatch(updateTasker(schedule, tasker_id));
      dispatch(openModal({tasker_id}));
    });
  }
}

export const fetchUserInfo = (id) => {
  return dispatch => {
    ApiUtil.fetchUserInfo(id).then(info => {
      dispatch(receiveTaskerInfo(info));
    });
  }
}

export const changeTasker = (info, taskerId) => {
  return dispatch => {
    return ApiUtil.updateTasker(info, taskerId)
  }
}

export const uploadTaskerPhoto = user => {
  return dispatch => {
    return ApiUtil.uploadTaskerPhoto(user)
  }
}

export const editTaskerLocation = (data) => {
  return {
    type: EDIT_TASKER_LOCATION,
    data
  }
}

export const cancelLocationChange = () => ({
  type: CANCEL_LOCATION_CHANGE
})

export const affirmLocationChange = () => ({
  type: AFFIRM_LOCATION_CHANGE
})

export const editTaskerCategories = (data) => {
  return {
    type: EDIT_TASKER_CATEGORIES,
    data
  }
}

export const editTaskerRate = (rate) => {
  return {
    type: EDIT_TASKER_RATE,
    rate
  }
}

export const editTaskerDescription = (description) => {
  return {
    type: EDIT_TASKER_DESCRIPTION,
    description
  }
}

export const editTaskerPhoto = (imgUrl) => {
  return {
    type: EDIT_TASKER_PHOTO,
    imgUrl
  }
}

export const updateTasker = (schedule, tasker_id) => {
  return {
    type: UPDATE_TASKER,
    schedule,
    tasker_id
  }
}

export const receiveTaskerInfo = (info) => {
  return {
    type: RECEIVE_TASKER_INFO,
    info
  }
}
