import { connect } from 'react-redux';

import SearchStatus from './SearchStatus';

const mapStateToProps = state => ({
  loading: !!state.fetching,
  searchError: state.search.error
});

export default connect(mapStateToProps)(SearchStatus);