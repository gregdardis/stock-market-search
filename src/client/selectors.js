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