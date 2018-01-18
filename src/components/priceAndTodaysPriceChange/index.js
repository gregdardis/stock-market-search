import { connect } from 'react-redux';

import PriceAndTodaysPriceChange from './PriceAndTodaysPriceChange';

const mapStateToProps = state => ({
  currentPrice: ,
  priceChange: ,
  priceChangePercentage:
});

const mapDispatchToProps = null;

const PriceAndTodaysPriceChangeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PriceAndTodaysPriceChange);

export default PriceAndTodaysPriceChangeContainer;