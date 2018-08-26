import { connect } from 'react-redux';

import Home from './Home';

const mapStateToProps = state => ({
  isLoading: !!state.fetching,
  searchError: state.search.error
});

export default connect(mapStateToProps)(Home);