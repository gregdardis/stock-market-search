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

<<<<<<< HEAD
// This is currently unused, but should be used:
export const stockOverviewDataSelector = createSelector(
  selectedStockSelector,
  selectedStock => selectedStock.stockOverviewData
);

export function selectedStockValueForKeySelector(state, key) {
  return createSelector(
    selectedStockSelector,
    selectedStock => selectedStock[key]
  )(state);
}
=======
export const chartTimePeriodIndexSelector = state => state.chartTimePeriodIndex;
>>>>>>> implement-selectors-everywhere
