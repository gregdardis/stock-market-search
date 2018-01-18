export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export const CLEAR_SEARCH_TERM = 'CLEAR_SEARCH_TERM';
export const PERFORM_SEARCH = 'PERFORM_SEARCH';
export const EMPTY_SEARCH = 'EMPTY_SEARCH';

export const UPDATE_DATA_ITEMS = 'UPDATE_DATA_ITEMS';

export const FETCH_STOCK_REQUEST = 'FETCH_STOCK_REQUEST';
export const FETCH_STOCK_SUCCESS = 'FETCH_STOCK_SUCCESS';
export const FETCH_STOCK_FAILURE = 'FETCH_STOCK_FAILURE';

export const REQUEST_STOCK = 'REQUEST_STOCK';
export const RECEIVE_STOCK = 'RECEIVE_STOCK';

export const updateSearchTerm = searchTerm => ({
  type: UPDATE_SEARCH_TERM,
  searchTerm
});

export const clearSearchTerm = () => ({
  type: CLEAR_SEARCH_TERM
});

export const performSearch = searchTerm => ({
  type: PERFORM_SEARCH,
  searchTerm
});

export const requestStock = symbol => ({
  type: REQUEST_STOCK,
  symbol
});

export const receiveStock = json => ({
  type: RECEIVE_STOCK,
  companyName: json.companyName,
  symbol: json.symbol,
  stockData: json.stockData,
  receivedAt: Date.now()
});

export const fetchStock = symbol => (
  dispatch => {
    dispatch(
      requestStock(symbol)
    );
    return fetch(`/api/stocks/${symbol}`)
      .then(
        res => res.json(),
        error => console.log('THERE WAS AN ERROR' + error)
      ).then(
        json => dispatch(
          receiveStock(json)
        )
      );
  }
);