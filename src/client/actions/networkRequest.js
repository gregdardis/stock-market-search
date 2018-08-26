import { setChartToDefaultTimePeriod } from '.';
import { setSearchError } from '.';
import {
  errorMessageStockNotFound,
  ERROR_MESSAGE_UNEXPECTED
} from '../../constants/userFacing';

export const RECEIVE_STOCK = 'RECEIVE_STOCK';
export const SET_DONE_FETCHING = 'SET_DONE_FETCHING';
export const SET_FETCHING = 'SET_FETCHING';

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

export const setFetching = stockSymbol => ({
  type: SET_FETCHING,
  stockSymbol
});

export const setDoneFetching = () => ({
  type: SET_DONE_FETCHING
});

export const fetchStock = symbol => (
  dispatch => {
    dispatch(setFetching(symbol));
    return fetch(`/api/stocks/${symbol}`)
      .then(res => {
        dispatch(setDoneFetching());
        if (!res.ok) {
          let errorMessage;
          if (res.status === 404) {
            errorMessage = errorMessageStockNotFound(symbol);
          } else {
            errorMessage = ERROR_MESSAGE_UNEXPECTED;
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
        dispatch(setDoneFetching());
      });
  }
);