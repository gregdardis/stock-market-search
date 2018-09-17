import { createSelector } from 'reselect';

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

// This is currently unused, but should be used:
// TODO: test
export const stockOverviewDataSelector = createSelector(
  selectedStockSelector,
  selectedStock => selectedStock.stockOverviewData
);

// TODO: test
export function selectedStockValueForKeySelector(state, key) {
  return createSelector(
    selectedStockSelector,
    selectedStock => selectedStock[key]
  )(state);
}
export const chartTimePeriodIndexSelector = state => state.chartTimePeriodIndex;

// TODO: test
export const fetchingSelector = state => state.fetching;

// TODO: test
export const searchSelector = state => state.search;

// TODO: test
export const searchErrorSelector = createSelector(
  searchSelector,
  search => search.error
);