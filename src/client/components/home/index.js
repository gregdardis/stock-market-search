import { connect } from 'react-redux';

import Home from './Home';

const isStockLoading = state => {
  const { searchTerm, stocks } = state;
  return !!searchTerm && !!stocks[searchTerm] && stocks[searchTerm].isFetching;
};

const mapStateToProps = state => ({
  loading: isStockLoading(state)
});

export default connect(mapStateToProps)(Home);