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

export const fetchingSelector = state => state.fetching;

export const searchSelector = state => state.search;

export const searchErrorSelector = createSelector(
  searchSelector,
  search => search.error
);