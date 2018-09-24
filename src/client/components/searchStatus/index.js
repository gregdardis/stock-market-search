import { connect } from 'react-redux';

import SearchStatus from './SearchStatus';
import { fetchingSelector, searchErrorSelector } from '../../selectors';

export const mapStateToProps = state => ({
  loading: !!fetchingSelector(state),
  searchError: searchErrorSelector(state)
});

export default connect(mapStateToProps)(SearchStatus);