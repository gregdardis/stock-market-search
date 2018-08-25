import { connect } from 'react-redux';

import Home from './Home';

const mapStateToProps = state => {
  // TODO: determine from the state if a stock is loading
  console.info('state', state)
  return {
    loading: false
  };
};

export default connect(mapStateToProps)(Home);