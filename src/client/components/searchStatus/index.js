import { connect } from 'react-redux';

import SearchStatus from './SearchStatus';

// TODO: Are there selectors that can be used here in another branch
// or do I need to make my own?
const mapStateToProps = state => ({
  loading: !!state.fetching,
  searchError: state.search.error
});

export default connect(mapStateToProps)(SearchStatus);