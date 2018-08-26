import { connect } from 'react-redux';

import Home from './Home';

const mapStateToProps = state => ({
  loading: !!state.fetching,
  searchError: state.search.error
});

export default connect(mapStateToProps)(Home);