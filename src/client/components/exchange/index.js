import { connect } from 'react-redux';

import Exchange from './Exchange';
import {
  getFormattedStockExchange
} from '../../../utils/stateGetters/getFormattedStockExchange';

export const mapStateToProps = state => ({
  exchange: getFormattedStockExchange(state)
});

export default connect(
  mapStateToProps
)(Exchange);