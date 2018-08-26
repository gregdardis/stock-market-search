export function getSelectedStockValueForKey(state, key) {
  const symbol = state.selectedStock;
  const selectedStock = state.stocks[symbol];
  return selectedStock[key];
}