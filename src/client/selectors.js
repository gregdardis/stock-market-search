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

export const currentPriceValueSelector = createSelector(
  currentPriceSelector,
  currentPrice => currentPrice.value
);

export const previousCloseSelector = createSelector(
  stockOverviewDataSelector,
  stockOverviewData => stockOverviewData[LABEL_PREVIOUS_CLOSE]
);

export const previousCloseValueSelector = createSelector(
  previousCloseSelector,
  previousClose => previousClose.value
);

export const chartTimePeriodIndexSelector = state => state.chartTimePeriodIndex;

export const fetchingSelector = state => state.fetching;

export const fetchingStockSelector = createSelector(
  fetchingSelector,
  stocksSelector,
  (fetching, stocks) => stocks[fetching]
);

export const searchSelector = state => state.search;

export const searchErrorSelector = createSelector(
  searchSelector,
  search => search.error
);

export const searchCurrentTextSelector = createSelector(
  searchSelector,
  search => search.currentText
);

export const exchangeSelector = createSelector(
  selectedStockSelector,
  selectedStock => selectedStock.exchange
);

export function selectedStockValueForKeySelector(state, key) {
  return createSelector(
    selectedStockSelector,
    selectedStock => selectedStock[key]
  )(state);
}