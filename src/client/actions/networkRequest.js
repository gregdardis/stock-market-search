import { setChartToDefaultTimePeriod } from '.';
import { receiveSearchError } from '.';
import {
  errorMessageStockNotFound,
  ERROR_MESSAGE_UNEXPECTED
} from '../../constants/userFacing';

export const RECEIVE_STOCK = 'RECEIVE_STOCK';
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

export const fetchStock = symbol => (
  dispatch => {
    dispatch(setFetching(symbol));
    return fetch(`/api/stocks/${symbol}`)
      .then(res => {
        if (!res.ok) {
          let errorMessage;
          if (res.status === 404) {
            errorMessage = errorMessageStockNotFound(symbol);
          } else {
            errorMessage = ERROR_MESSAGE_UNEXPECTED;
          }
          dispatch(receiveSearchError(errorMessage));
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
        dispatch(receiveSearchError(ERROR_MESSAGE_UNEXPECTED));
      });
  }
);