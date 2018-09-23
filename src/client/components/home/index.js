import { connect } from 'react-redux';

import Home from './Home';
import {
  fetchingSelector,
  searchErrorSelector
} from '../../selectors';

export const mapStateToProps = state => ({
  loading: !!fetchingSelector(state),
  searchError: searchErrorSelector(state)
});

export default connect(mapStateToProps)(Home);