export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export const CLEAR_SEARCH_TERM = 'CLEAR_SEARCH_TERM';
export const PERFORM_SEARCH = 'PERFORM_SEARCH';
export const EMPTY_SEARCH = 'EMPTY_SEARCH';

export const FETCH_STOCK_REQUEST = 'FETCH_STOCK_REQUEST';
export const FETCH_STOCK_SUCCESS = 'FETCH_STOCK_SUCCESS';
export const FETCH_STOCK_FAILURE = 'FETCH_STOCK_FAILURE';

export const REQUEST_STOCK = 'REQUEST_STOCK';
export const RECEIVE_STOCK = 'RECEIVE_STOCK';

export const SET_CHART_TO_DEFAULT_TIME_PERIOD = 'SET_CHART_TO_DEFAULT_TIME_PERIOD';
export const UPDATE_CHART_TIME_PERIOD = 'UPDATE_CHART_TIME_PERIOD';

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

export const receiveStock = ({
  companyName,
  exchange,
  oneYearData,
  stockData,
  symbol
}) => ({
  type: RECEIVE_STOCK,
  companyName,
  exchange,
  oneYearData,
  receivedAt: Date.now(),
  stockData,
  symbol
});

export const updateChartTimePeriod = timePeriod => ({
  type: UPDATE_CHART_TIME_PERIOD,
  timePeriod
});

export const setChartToDefaultTimePeriod = () => ({
  type: SET_CHART_TO_DEFAULT_TIME_PERIOD
});

// Help from https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
export const fetchStock = symbol => (
  dispatch => {
    dispatch(requestStock(symbol));

    return fetch(`/api/stocks/${symbol}`)
      .then(
        res => {
          if (!res.ok) {
            throw new Error(`Result not ok, status code: ${res.status}`);
          }
          return res.json();
        })
      .then(json => {
        dispatch(receiveStock(json));
        dispatch(setChartToDefaultTimePeriod());
      })
      .catch(error => {
        // TODO: dispatch an action to show an error message
        console.log(`Error on fetchStock: ${error}`);
      });
  }
);