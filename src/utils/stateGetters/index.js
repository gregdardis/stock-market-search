export function getSelectedStockValueForKey(state, key) {
  const symbol = state.selectedStock;
  const selectedStock = state.stocks[symbol];
  return selectedStock[key];
}

export function isStockLoading(state) {
  const { search, stocks } = state;
  const { lastSearch } = search;
  if (lastSearch && stocks[lastSearch]) {
    return stocks[lastSearch].isFetching;
  }
  return false;
}