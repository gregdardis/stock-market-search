import { createSelector } from 'reselect';
import {
  LABEL_CURRENT_PRICE,
  LABEL_PREVIOUS_CLOSE
} from '../constants/userFacingStrings';

export const selectedStockSymbolSelector = state => state.selectedStock;
export const stocksSelector = state => state.stocks;

export const selectedStockSelector = createSelector(
  selectedStockSymbolSelector,
  stocksSelector,
  (selectedStock, stocks) => stocks[selectedStock]
);

export const companyNameSelector = createSelector(
  selectedStockSelector,
  selectedStock => selectedStock.companyName
);

export const stockOverviewDataSelector = createSelector(
  selectedStockSelector,
  selectedStock => selectedStock.stockOverviewData
);

export const currentPriceSelector = createSelector(
  stockOverviewDataSelector,
  stockOverviewData => stockOverviewData[LABEL_CURRENT_PRICE]
);

// TODO: test and use properly
export const currentPriceValueSelector = createSelector(
  currentPriceSelector,
  currentPrice => currentPrice.value
);

// TODO: test and use properly
export const previousCloseSelector = createSelector(
  stockOverviewDataSelector,
  stockOverviewData => stockOverviewData[LABEL_PREVIOUS_CLOSE]
);

// TODO: test and use properly
export const previousCloseValueSelector = createSelector(
  previousCloseSelector,
  previousClose => previousClose.value
);

export function selectedStockValueForKeySelector(state, key) {
  return createSelector(
    selectedStockSelector,
    selectedStock => selectedStock[key]
  )(state);
}
export const chartTimePeriodIndexSelector = state => state.chartTimePeriodIndex;

export const fetchingSelector = state => state.fetching;

export const searchSelector = state => state.search;

export const searchErrorSelector = createSelector(
  searchSelector,
  search => search.error
);

export const exchangeSelector = createSelector(
  selectedStockSelector,
  selectedStock => selectedStock.exchange
);