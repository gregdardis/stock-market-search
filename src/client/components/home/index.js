import { connect } from 'react-redux';

import Home from './Home';

import { isStockLoading } from '../../../utils/stateGetters';

const mapStateToProps = state => {
  return {
    loading: isStockLoading(state)
  };
};

export default connect(mapStateToProps)(Home);