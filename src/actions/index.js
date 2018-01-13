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

// export const fetchStockRequest = () => ({
//   type: FETCH_STOCK_REQUEST
// });

// export const fetchStockSuccess = () => ({
//   type: FETCH_STOCK_SUCCESS
// });

// export const fetchStockFailure = () => ({
//   type: FETCH_STOCK_FAILURE
// });

export const requestStock = stockIdentifier => ({
  type: REQUEST_STOCK,
  stockIdentifier
});

export const receiveStock = (stockIdentifier, json) => ({
  type: RECEIVE_STOCK,
  stockIdentifier,
  stockData: json.data.children.map(child => child.data),
  receivedAt: Date.now()
});

export const fetchStock = stockIdentifier => (
  dispatch => {
    dispatch(
      requestStock(stockIdentifier)
    );
    return fetch(`http://localhost:3000/stocks/${stockIdentifier}`)
      .then(
        res => console.log(res),
        error => console.log('THERE WAS AN ERROR' + error)
      );
  }
);