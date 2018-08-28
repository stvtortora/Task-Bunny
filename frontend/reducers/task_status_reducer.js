import { ADD_TO_TASK, TASK_CREATED, TASK_CANCELLED, TASK_CONFLICT } from '../actions/tasks_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const taskStatusReducer = (state = [], action) => {
  switch(action.type) {
    case TASK_CREATED:
      return ['Task confirmed'];
    case TASK_CANCELLED:
      return ['Task cancelled'];
    case TASK_CONFLICT:
      return ['Task not confirmed due to time conflict'];
    case LOGOUT_CURRENT_USER:
      return [];
    case ADD_TO_TASK:
      return [];
    default:
      return state;
  }
}

export default taskStatusReducer;
