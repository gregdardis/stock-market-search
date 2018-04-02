import { connect } from 'react-redux';

import Home from './Home';

const mapStateToProps = state => {
  // TODO: determine from the state if a stock is loading
  return {
    loading: true
  };
};

export default connect(mapStateToProps)(Home);