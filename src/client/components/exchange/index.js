import { connect } from 'react-redux';

import Exchange from './Exchange';
import { getSelectedStockValueForKey } from '../../../utils/stateGetters';

const getFormattedStockExchange = state => {
  const exchange = getSelectedStockValueForKey(state, 'exchange');
  switch (exchange) {
  case 'Toronto':
    return 'TSX';
  case 'NasdaqGS':
    return 'NASDAQ';
  default:
    return exchange;
  }
};

const mapStateToProps = state => ({
  exchange: getFormattedStockExchange(state)
});

const ExchangeContainer = connect(
  mapStateToProps
)(Exchange);

export default ExchangeContainer;