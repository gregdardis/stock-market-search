import { connect } from 'react-redux';

import Home from './Home';
import {
  fetchingSelector,
  searchErrorSelector
} from '../../selectors';

const mapStateToProps = state => ({
  loading: !!fetchingSelector(state),
  searchError: searchErrorSelector(state)
});

export default connect(mapStateToProps)(Home);