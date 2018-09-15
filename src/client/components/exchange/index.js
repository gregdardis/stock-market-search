import { connect } from 'react-redux';

import Exchange from './Exchange';
import {
  getFormattedStockExchange
} from '../../../utils/stateGetters/getFormattedStockExchange';

// TODO: test
export const mapStateToProps = state => ({
  exchange: getFormattedStockExchange(state)
});

const ExchangeContainer = connect(
  mapStateToProps
)(Exchange);

export default ExchangeContainer;