import { connect } from 'react-redux';
import { modDropdown, fetchCategories, clearSearchBar } from '../../actions/entities_actions';
import Search from './search';

const mapStateToProps = (state) => {
  const input = state.entities.search.input;
  return {
    input: state.entities.search.input,
    open: state.entities.search.open,
    placeholder: 'Need something different?',
    path: "/taskform/details"
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    modDropdown: (status) => dispatch(modDropdown(status)),
    fetchResults: (criteria) => dispatch(fetchCategories(criteria)),
    action: () => dispatch(clearSearchBar())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);