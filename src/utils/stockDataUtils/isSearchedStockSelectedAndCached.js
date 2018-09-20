import {
  fetchingSelector,
  fetchingStockSelector,
  selectedStockSymbolSelector
} from '../../client/selectors';

export function isSearchedStockSelectedAndCached(state) {
  const fetching = fetchingSelector(state);

  if (fetching && fetchingStockSelector(state)) {
    return fetching === selectedStockSymbolSelector(state);
  }
  return false;
}