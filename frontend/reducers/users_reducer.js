import { RECEIVE_CURRENT_USER } from '../actions/entities_actions';
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.user.id]: action.user });
    default:
      return state;
  }
}

export default usersReducer;
