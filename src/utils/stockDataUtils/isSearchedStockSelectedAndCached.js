
// checks if we are fetching a stock
// AND if the stock we are fetching is already in stocks object
// then return true if the selectedStock
// is equal to the stock we are fetching
export function isSearchedStockSelectedAndCached(state) {
  const { fetching, stocks } = state;
  if (fetching && stocks[fetching]) {
    return stocks[fetching].symbol === state.selectedStock;
  }
  return false;
}