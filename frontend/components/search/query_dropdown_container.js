import { connect } from 'react-redux';
import QueryDropdown from './query_dropdown';
import { addToTask } from '../../actions/tasks_actions';
import { dropDownItemSelected } from '../../actions/dropdown_actions';
import merge from 'lodash/merge';

const mapStateToProps = (state, ownProps) => {
  return {
    searchResults: state.entities.search.results
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToTask: (taskParam) => dispatch(addToTask(taskParam)),
    dropDownItemSelected: (location) => dispatch(dropDownItemSelected(location))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QueryDropdown);
