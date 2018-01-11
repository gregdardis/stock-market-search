export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export const CLEAR_SEARCH_TERM = 'CLEAR_SEARCH_TERM';
export const PERFORM_SEARCH = 'PERFORM_SEARCH';

export const UPDATE_DATA_ITEMS = 'UPDATE_DATA_ITEMS';

export const FETCH_STOCK_REQUEST = 'FETCH_STOCK_REQUEST';
export const FETCH_STOCK_SUCCESS = 'FETCH_STOCK_SUCCESS';
export const FETCH_STOCK_FAILURE = 'FETCH_STOCK_FAILURE';

export const updateSearchTerm = searchTerm => ({
  type: UPDATE_SEARCH_TERM,
  searchTerm
});

export const clearSearchTerm = () => ({
  type: CLEAR_SEARCH_TERM
});

export const performSearch = () => ({
  type: PERFORM_SEARCH
});

export const fetchStockRequest = () => ({
  type: FETCH_STOCK_REQUEST
});

export const fetchStockSuccess = () => ({
  type: FETCH_STOCK_SUCCESS
});

export const fetchStockFailure = () => ({
  type: FETCH_STOCK_FAILURE
});