import { setChartToDefaultTimePeriod } from '.';
import { setSearchError } from '.';

export const SET_IS_FETCHING = 'SET_IS_FETCHING';
export const RECEIVE_STOCK = 'RECEIVE_STOCK';

export const receiveStock = ({
  companyName,
  exchange,
  fiveDayStockData,
  maxStockData,
  oneDayStockData,
  stockOverviewData,
  symbol
}) => ({
  type: RECEIVE_STOCK,
  companyName,
  exchange,
  fiveDayStockData,
  maxStockData,
  oneDayStockData,
  receivedAt: Date.now(),
  stockOverviewData,
  symbol
});

export const setIsFetching = isFetching => ({
  type: SET_IS_FETCHING,
  isFetching
});

// Help from
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
export const fetchStock = symbol => (
  dispatch => {
    dispatch(setIsFetching(true));
    return fetch(`/api/stocks/${symbol}`)
      .then(
        res => {
          dispatch(setIsFetching(false));
          if (!res.ok) {
            let errorMessage = 'An unexpected error occurred.';
            if (res.status === 404) {
              errorMessage = `No stock with the symbol "${symbol}" was found.`;
            }
            dispatch(setSearchError(errorMessage));
            return null;
          }
          return res.json();
        })
      .then(json => {
        if (json) {
          dispatch(receiveStock(json));
          dispatch(setChartToDefaultTimePeriod());
        }
      })
      .catch(() => {
        dispatch(setIsFetching(false));
      });
  }
);