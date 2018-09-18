import { connect } from 'react-redux';

import PriceAndTodaysPriceChange from './PriceAndTodaysPriceChange';
import {
  calculatePriceChange
} from '../../../utils/stockDataUtils/calculatePriceChange';
import { currentPriceValueSelector } from '../../selectors';
import {
  calculateFormattedPriceChangePercentage,
  formatAsPrice
} from '../../../utils/formatting/numberFormatting';

export const mapStateToProps = state => {
  const priceChange = calculatePriceChange(state);
  const currentPrice = currentPriceValueSelector(state);
  return {
    currentPrice: formatAsPrice(currentPrice),
    isPositiveChange: priceChange >= 0,
    priceChange: formatAsPrice(priceChange),
    priceChangePercentage: calculateFormattedPriceChangePercentage(
      priceChange,
      currentPrice
    )
  };
};

export default connect(mapStateToProps)(PriceAndTodaysPriceChange);